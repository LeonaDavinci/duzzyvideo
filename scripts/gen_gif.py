"""
Generate the BuzzyAI Video "Director Canvas" demo GIF.

Renders stylized frames of the canvas UI showing the core feature flow:
storyboard -> multi-angle camera -> real-time lighting -> render -> clip preview.
Frames are written as PNGs, then assembled into a GIF with ffmpeg (shared palette).
"""
import os
import math
import tempfile
from PIL import Image, ImageDraw, ImageFont

W, H = 640, 360
FPS = 12
N = 84  # total frames

# ---- palette ----
BG = (18, 18, 18)
PANEL = (32, 32, 32)
PANEL2 = (40, 40, 40)
BORDER = (60, 60, 60)
GOLD = (245, 197, 24)
GOLD2 = (212, 175, 55)
LIGHT = (245, 245, 245)
TEXT2 = (168, 168, 168)
SUBJECT = (120, 110, 80)

FONT_PATH = "C:/Windows/Fonts/arial.ttf"
_fc = {}


def font(sz):
    if sz in _fc:
        return _fc[sz]
    try:
        f = ImageFont.truetype(FONT_PATH, sz)
    except Exception:
        f = ImageFont.load_default()
    _fc[sz] = f
    return f


def new_frame():
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    return img, d


def bar(d):
    # top app bar
    d.rectangle([0, 0, W, 34], fill=PANEL2)
    d.line([0, 34, W, 34], fill=BORDER, width=1)
    d.text((14, 9), "BuzzyAI Video  —  Director Canvas", font=font(14), fill=GOLD)
    # live pill
    d.rounded_rectangle([W - 78, 9, W - 14, 25], radius=8, outline=BORDER, width=1)
    d.ellipse([W - 70, 14, W - 64, 20], fill=GOLD)
    d.text((W - 60, 9), "Live", font=font(11), fill=TEXT2)


def panel(d, x0, y0, x1, y1, title=None):
    d.rounded_rectangle([x0, y0, x1, y1], radius=10, fill=PANEL, outline=BORDER, width=1)
    if title:
        d.text((x0 + 12, y0 + 10), title, font=font(12), fill=TEXT2)


def glow_circle(d, cx, cy, R, color, steps=9):
    """Approximate a soft radial glow with concentric filled ellipses."""
    for i in range(steps, 0, -1):
        t = i / steps
        r = R * t
        shade = tuple(int(color[k] * (1.15 - t * 0.7)) for k in range(3))
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=shade)


def cube(d, cx, cy, h, angle):
    verts = []
    for sx in (-1, 1):
        for sy in (-1, 1):
            for sz in (-1, 1):
                x, y, z = sx * h, sy * h, sz * h
                xr = x * math.cos(angle) + z * math.sin(angle)
                zr = -x * math.sin(angle) + z * math.cos(angle)
                verts.append((cx + xr, cy - y))
    edges = [
        (0, 1), (1, 3), (3, 2), (2, 0),
        (4, 5), (5, 7), (7, 6), (6, 4),
        (0, 4), (1, 5), (2, 6), (3, 7),
    ]
    for a, b in edges:
        d.line([verts[a], verts[b]], fill=GOLD, width=2)


def scene(d, x0, y0, x1, y1, accent):
    # simple horizon scene inside a viewport
    d.rectangle([x0, y0, x1, y1], fill=(24, 24, 24))
    horizon = y0 + (y1 - y0) * 0.62
    d.rectangle([x0, horizon, x1, y1], fill=(30, 28, 22))
    d.ellipse([x0 + 18, horizon - 22, x0 + 50, horizon + 10], fill=accent)
    d.line([x0, horizon, x1, horizon], fill=BORDER, width=1)


def text_center(d, cx, cy, txt, sz, color, w=None):
    f = font(sz)
    w_ = d.textlength(txt, font=f) if w is None else w
    d.text((cx - w_ / 2, cy), txt, font=f, fill=color)


frames = []
TMP = tempfile.mkdtemp(prefix="buzzy_gif_")

# layout regions
VIEW = (16, 48, 392, 344)       # left viewport
CTRL = (408, 48, 624, 344)      # right controls

for i in range(N):
    img, d = new_frame()
    bar(d)

    # ---------- TITLE (0..8) ----------
    if i <= 8:
        panel(d, *VIEW, "Canvas")
        scene(d, VIEW[0] + 10, VIEW[2] and VIEW[1] + 10, VIEW[2] - 10, VIEW[3] - 10, GOLD2)
        panel(d, *CTRL, "Controls")
        d.text((CTRL[0] + 12, CTRL[1] + 60), "Type a script or prompt,", font=font(13), fill=LIGHT)
        d.text((CTRL[0] + 12, CTRL[1] + 80), "then direct your shot.", font=font(13), fill=LIGHT)
        if i == 8:
            text_center(d, (VIEW[0] + VIEW[2]) // 2, (VIEW[1] + VIEW[3]) // 2 - 6,
                        "Direct your animation.", 16, GOLD, w=None)
            text_center(d, (VIEW[0] + VIEW[2]) // 2, (VIEW[1] + VIEW[3]) // 2 + 16,
                        "Generate video.", 16, LIGHT, w=None)

    # ---------- STORYBOARD (8..30) ----------
    elif i <= 30:
        panel(d, *VIEW, "Storyboard")
        gx0, gy0, gx1, gy1 = VIEW[0] + 12, VIEW[1] + 28, VIEW[2] - 12, VIEW[3] - 12
        cols, rows = 3, 2
        cw = (gx1 - gx0) / cols
        ch = (gy1 - gy0) / rows
        appear = int((i - 8) / 22 * 7)  # 0..6 panels
        for r in range(rows):
            for c in range(cols):
                idx = r * cols + c
                px0, py0 = gx0 + c * cw + 4, gy0 + r * ch + 4
                px1, py1 = gx0 + (c + 1) * cw - 4, gy0 + (r + 1) * ch - 4
                if idx < appear:
                    d.rounded_rectangle([px0, py0, px1, py1], radius=5, outline=GOLD, width=1)
                    d.text((px0 + 6, py0 + 5), f"Shot {idx+1:02d}", font=font(10), fill=TEXT2)
                    d.ellipse([px0 + 10, py0 + ch * 0.5, px0 + 26, py0 + ch * 0.5 + 16], fill=GOLD2)
                else:
                    d.rounded_rectangle([px0, py0, px1, py1], radius=5, outline=BORDER, width=1)
        panel(d, *CTRL, "Shots")
        d.text((CTRL[0] + 12, CTRL[1] + 28), f"Generated {min(appear,6)} shots", font=font(13), fill=LIGHT)
        for k in range(min(appear, 6)):
            d.text((CTRL[0] + 12, CTRL[1] + 56 + k * 22), f"• Scene {k+1}: consistent", font=font(11), fill=TEXT2)

    # ---------- CAMERA (30..48) ----------
    elif i <= 48:
        panel(d, *VIEW, "Viewport")
        scene(d, VIEW[0] + 10, VIEW[1] + 10, VIEW[2] - 10, VIEW[3] - 10, GOLD2)
        panel(d, *CTRL, "Camera")
        ang = (i - 30) / 18 * math.pi * 2
        cube(d, (CTRL[0] + CTRL[2]) // 2, CTRL[1] + 95, 30, ang)
        for j, lab in enumerate(["Angle", "Tilt", "Motion"]):
            y = CTRL[1] + 170 + j * 30
            d.text((CTRL[0] + 12, y - 12), lab, font=font(11), fill=TEXT2)
            d.rounded_rectangle([CTRL[0] + 12, y, CTRL[2] - 12, y + 6], radius=3, fill=PANEL2, outline=BORDER)
            knob = CTRL[0] + 12 + ((math.sin(ang * 2 + j) + 1) / 2) * (CTRL[2] - CTRL[0] - 24)
            d.ellipse([knob - 5, y - 4, knob + 5, y + 10], fill=GOLD)

    # ---------- LIGHTING (48..64) ----------
    elif i <= 64:
        panel(d, *VIEW, "Viewport")
        # subject + moving key light + rim
        t = (i - 48) / 16
        lx = VIEW[0] + 40 + t * (VIEW[2] - VIEW[0] - 80)
        ly = VIEW[1] + (VIEW[3] - VIEW[1]) * 0.45
        d.rectangle([VIEW[0] + 10, VIEW[1] + 10, VIEW[2] - 10, VIEW[3] - 10], fill=(22, 22, 22))
        glow_circle(d, int(lx), int(ly), 70, GOLD)
        # subject silhouette
        sx = VIEW[0] + (VIEW[2] - VIEW[0]) // 2
        sy = VIEW[3] - 24
        d.rounded_rectangle([sx - 26, sy - 90, sx + 26, sy], radius=22, fill=SUBJECT)
        d.ellipse([sx - 18, sy - 118, sx + 18, sy - 82], fill=SUBJECT)
        # rim light edge
        d.line([sx + 26, sy - 88, sx + 26, sy], fill=GOLD, width=2)
        panel(d, *CTRL, "Lighting")
        for j, lab in enumerate(["Key", "Temp", "Rim"]):
            y = CTRL[1] + 40 + j * 34
            d.text((CTRL[0] + 12, y - 12), lab, font=font(11), fill=TEXT2)
            d.rounded_rectangle([CTRL[0] + 12, y, CTRL[2] - 12, y + 6], radius=3, fill=PANEL2, outline=BORDER)
            knob = CTRL[0] + 12 + ((math.sin(t * 3 + j) + 1) / 2) * (CTRL[2] - CTRL[0] - 24)
            d.ellipse([knob - 5, y - 4, knob + 5, y + 10], fill=GOLD)

    # ---------- GENERATE (64..72) ----------
    elif i <= 72:
        panel(d, *VIEW, "Rendering")
        prog = (i - 64) / 8
        bx0, by0, bx1, by1 = VIEW[0] + 30, (VIEW[1] + VIEW[3]) // 2 - 8, VIEW[2] - 30, (VIEW[1] + VIEW[3]) // 2 + 8
        d.rounded_rectangle([bx0, by0, bx1, by1], radius=8, outline=BORDER, width=1)
        d.rounded_rectangle([bx0, by0, bx0 + (bx1 - bx0) * prog, by1], radius=8, fill=GOLD)
        text_center(d, (VIEW[0] + VIEW[2]) // 2, by0 - 28, "Rendering clip...", 14, LIGHT)
        text_center(d, (VIEW[0] + VIEW[2]) // 2, by1 + 14, f"{int(prog*100)}%", 13, GOLD)
        panel(d, *CTRL, "Engine")
        d.text((CTRL[0] + 12, CTRL[1] + 40), "Model: Seedance 2.0", font=font(12), fill=TEXT2)
        d.text((CTRL[0] + 12, CTRL[1] + 70), "Resolution: 4K", font=font(12), fill=TEXT2)
        d.text((CTRL[0] + 12, CTRL[1] + 100), "Length: 30s", font=font(12), fill=TEXT2)

    # ---------- PREVIEW (72..83) ----------
    else:
        panel(d, *VIEW, "Your clip")
        # 16:9 video preview
        vx0, vy0 = VIEW[0] + 24, VIEW[1] + 30
        vx1, vy1 = VIEW[2] - 24, VIEW[3] - 24
        d.rectangle([vx0, vy0, vx1, vy1], fill=(10, 10, 10), outline=GOLD, width=2)
        cx, cy = (vx0 + vx1) // 2, (vy0 + vy1) // 2
        d.polygon([(cx - 16, cy - 22), (cx - 16, cy + 22), (cx + 24, cy)], fill=GOLD)
        text_center(d, cx, vy1 - 22, "Your clip is ready", 13, LIGHT)
        panel(d, *CTRL, "Export")
        d.rounded_rectangle([CTRL[0] + 12, CTRL[1] + 50, CTRL[2] - 12, CTRL[1] + 86], radius=8, fill=GOLD)
        text_center(d, (CTRL[0] + CTRL[2]) // 2, CTRL[1] + 64, "Export 4K", 13, (20, 16, 0))
        d.text((CTRL[0] + 12, CTRL[1] + 110), "Format: MP4", font=font(11), fill=TEXT2)
        d.text((CTRL[0] + 12, CTRL[1] + 130), "Sound: optional", font=font(11), fill=TEXT2)

    frames.append(img)
    p = os.path.join(TMP, f"frame_{i:04d}.png")
    img.save(p)

print("frames:", len(frames), "tmp:", TMP)
print("FRAME_DIR=" + TMP)
