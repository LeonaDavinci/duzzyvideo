export interface ModelItem {
  name: string;
  desc: string;
  featured?: boolean;
}

export const models: ModelItem[] = [
  { name: "2.5 Model", desc: "4K · 30s clips · 50 assets", featured: true },
  { name: "Seedance 2.5", desc: "Motion-driven video creation" },
  { name: "Google Omni", desc: "Cinematic video generation" },
  { name: "Kling", desc: "High-fidelity physics simulation" },
  { name: "Runway", desc: "Next-gen creative video tools" },
  { name: "Nano Banana 2", desc: "Lightweight video synthesis" },
  { name: "Veo 3.1", desc: "Google's advanced video generation" },
  { name: "GPT Image 2", desc: "Photorealistic image generation" },
  { name: "Hailuo", desc: "Fast & expressive drafting" },
  { name: "Wan", desc: "Open-source SOTA video model" },
  { name: "Pixverse", desc: "Stylized & dynamic video" },
];

export interface Work {
  title: string;
  author: string;
  tag: string;
  hue: number;
}

export const films: Work[] = [
  { title: "Backroom", author: "The Last Key", tag: "AI Film", hue: 28 },
  { title: "Before Rome Sunset", author: "Roman", tag: "AI Film", hue: 18 },
  { title: "Pink Lemon", author: "El", tag: "AI Film", hue: 340 },
  { title: "Beyond the Moment", author: "Y1-B0", tag: "AI Film", hue: 210 },
  { title: "The Essence of Chairs", author: "Lucas", tag: "AI Film", hue: 42 },
  { title: "Kani Studio", author: "Kani", tag: "AI Film", hue: 8 },
];

export const animations: Work[] = [
  { title: "Neomorph", author: "Studio N", tag: "Animation", hue: 265 },
  { title: "Liquid Forms", author: "Aria", tag: "Animation", hue: 190 },
  { title: "Paper City", author: "Momo", tag: "Animation", hue: 150 },
];

export const mvExplainer: Work[] = [
  { title: "BeatMaster", author: "Rap", tag: "MV", hue: 300 },
  { title: "BioLearn", author: "Dance", tag: "MV", hue: 170 },
  { title: "Geosmin Facts", author: "SciShow", tag: "Explainer", hue: 48 },
];

export interface Tool {
  title: string;
  desc: string;
  index: string;
}

export const tools: Tool[] = [
  {
    title: "Storyboard Creator",
    desc: "Drop an image or prompt and get a multi-cam storyboard. Every character, object, and location is locked so your shots stay consistent.",
    index: "01",
  },
  {
    title: "Multi-angle Camera Control",
    desc: "Precisely control camera movement with a draggable cube for custom lens texture and motion across each storyboard panel.",
    index: "02",
  },
  {
    title: "Relighting in Real Time",
    desc: "Reposition the key light, tune brightness and color temperature, and add a rim light to keep every shot mood-matched.",
    index: "03",
  },
];

export interface Plan {
  name: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
}

export const plans: Plan[] = [
  {
    name: "Starter",
    price: "$0",
    unit: "/mo",
    desc: "For first-time AI video creators.",
    features: [
      "20 generations / month",
      "720p export",
      "Core model access",
      "Community support",
    ],
    cta: "Start free",
  },
  {
    name: "Creator",
    price: "$15",
    unit: "/mo",
    desc: "For serious everyday creators.",
    features: [
      "500 generations / month",
      "4K export · 30s clips",
      "Full model matrix",
      "Storyboard / Camera / Light",
      "Priority render queue",
    ],
    featured: true,
    cta: "Upgrade",
  },
  {
    name: "Studio",
    price: "$49",
    unit: "/mo",
    desc: "For studios & brand teams.",
    features: [
      "Unlimited generations",
      "4K export · team space",
      "API access",
      "Dedicated manager",
      "Commercial license",
    ],
    cta: "Contact us",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "Which AI video models are supported?",
    a: "We aggregate 11+ leading video and image models including Seedance, Kling, Runway, Veo, Google Omni, Hailuo, Wan, and Pixverse. Switch between them freely from one interface.",
  },
  {
    q: "Can I use it without any filmmaking background?",
    a: "Yes. Buzzy AI Video acts as your AI director. With storyboard generation, visual camera control, and real-time lighting, anyone can produce cinematic shorts.",
  },
  {
    q: "Do you support text-to-video and image-to-video?",
    a: "Both. Type a prompt to generate video, or upload a reference image for image-to-video creation.",
  },
  {
    q: "What is the maximum output quality and length?",
    a: "Flagship models support up to 4K quality, 30-second clips per generation, and project management for up to 50 assets.",
  },
  {
    q: "How do you keep characters consistent across shots?",
    a: "The Storyboard Creator records characters, objects, and locations, and automatically maintains consistency when generating across scenes.",
  },
];

/* ---------- New sections ---------- */

export interface UseCase {
  title: string;
  desc: string;
  icon: string;
}

export const useCases: UseCase[] = [
  {
    title: "Short Films",
    desc: "Direct character-driven narratives with consistent looks from opening to end card.",
    icon: "🎬",
  },
  {
    title: "Animation",
    desc: "Bring stylized worlds and creatures to life without a render farm.",
    icon: "✨",
  },
  {
    title: "Music Videos",
    desc: "Sync visuals to beats and build expressive performance clips in minutes.",
    icon: "🎵",
  },
  {
    title: "Explainers",
    desc: "Turn complex ideas into clear, branded educational videos.",
    icon: "💡",
  },
  {
    title: "Ads & Social",
    desc: "Produce scroll-stopping spots for campaigns and social feeds.",
    icon: "📣",
  },
  {
    title: "Concept Art in Motion",
    desc: "Pitch scenes and moods as moving references for bigger productions.",
    icon: "🎨",
  },
];

export interface Partner {
  name: string;
}

export const partners: Partner[] = [
  { name: "Seedance" },
  { name: "Kling" },
  { name: "Runway" },
  { name: "Veo" },
  { name: "Google Omni" },
  { name: "Hailuo" },
  { name: "Wan" },
  { name: "Pixverse" },
  { name: "GPT Image" },
  { name: "Nano Banana" },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Buzzy AI Video replaced three tools in my pipeline. The storyboard + camera control finally let me direct instead of just prompting.",
    name: "Maya R.",
    role: "Independent Filmmaker",
  },
  {
    quote:
      "We shipped a 40-second brand film over a weekend. The real-time relighting alone saved us a day in post.",
    name: "Daniel K.",
    role: "Creative Director, Studio North",
  },
  {
    quote:
      "As a musician I had zero video skills. The Director Canvas walked me through shots and the MV looked pro.",
    name: "Lia S.",
    role: "Artist & Producer",
  },
];

/* ---------- Video Works (homepage screenshot gallery + detail pages) ---------- */

export interface VideoWork {
  slug: string;
  title: string;
  author: string;
  tag: string; // category: AI Film | Animation | MV
  image: string; // screenshot file in /public/works
  duration: string; // "1:48"
  model: string; // model used to render
  createdAt: string; // "2026-08"
  views: string; // "24.6K"
  description: string;
  prompt: string; // generation prompt snippet
}

export const videoWorks: VideoWork[] = [
  {
    slug: "backroom",
    title: "Backroom",
    author: "The Last Key",
    tag: "AI Film",
    image: "/works/backroom.png",
    duration: "1:48",
    model: "Seedance 2.5",
    createdAt: "2026-08",
    views: "24.6K",
    description:
      "A descent through endless liminal corridors where the lights never quite steady. Every hallway was blocked in the Storyboard Creator first, so the concrete geometry, the flicker cadence and the camera height stay locked across all 38 cuts.",
    prompt:
      "A tense liminal backrooms corridor, flickering yellow fluorescent lights, worn concrete walls, eerie abandoned mood, cinematic 35mm grain, widescreen.",
  },
  {
    slug: "before-rome-sunset",
    title: "Before Rome Sunset",
    author: "Roman",
    tag: "AI Film",
    image: "/works/before-rome-sunset.png",
    duration: "2:12",
    model: "Kling",
    createdAt: "2026-07",
    views: "18.2K",
    description:
      "Two silhouettes walk the last mile of empire as the sun rakes across weathered stone. Real-time relighting kept the golden-hour key consistent from the opening wide shot to the final close-up on the dust.",
    prompt:
      "Golden hour over ancient Roman ruins, warm sunset light across stone columns, two distant silhouettes, dramatic orange and violet sky, filmic grading.",
  },
  {
    slug: "pink-lemon",
    title: "Pink Lemon",
    author: "El",
    tag: "AI Film",
    image: "/works/pink-lemon.png",
    duration: "0:58",
    model: "Veo 3.1",
    createdAt: "2026-09",
    views: "31.9K",
    description:
      "A surreal pastel dreamscape built as a fashion-editorial piece — a giant glossy lemon drifting through cream mist while ribbons trail in soft focus. Camera moves were choreographed on the Director Canvas cube before a single frame was rendered.",
    prompt:
      "Surreal pastel dreamscape, giant glossy pink lemon floating in cream mist, whimsical fashion-editorial mood, delicate drifting ribbons, ethereal lighting.",
  },
  {
    slug: "neomorph",
    title: "Neomorph",
    author: "Studio N",
    tag: "Animation",
    image: "/works/neomorph.png",
    duration: "1:05",
    model: "Runway",
    createdAt: "2026-06",
    views: "42.7K",
    description:
      "A sleek bioluminescent creature rendered in stylized 3D. Character and material references were pinned in the storyboard so the neon-blue veins read identically in every angle of the turntable.",
    prompt:
      "Sleek bioluminescent alien creature, translucent skin, glowing neon-blue and violet veins, dark sci-fi environment, stylized 3D render, moody atmosphere.",
  },
  {
    slug: "liquid-forms",
    title: "Liquid Forms",
    author: "Aria",
    tag: "Animation",
    image: "/works/liquid-forms.png",
    duration: "0:42",
    model: "Google Omni",
    createdAt: "2026-08",
    views: "15.3K",
    description:
      "Abstract flowing liquid-metal sculpture with chrome and iridescent reflections. A minimal dark studio was relit in real time to push the oil-slick highlights without blowing out the curves.",
    prompt:
      "Abstract flowing liquid-metal sculpture, chrome and iridescent oil-slick reflections, minimal dark studio lighting, smooth organic curves, elegant futuristic 3D render.",
  },
  {
    slug: "beatmaster",
    title: "BeatMaster",
    author: "Rap",
    tag: "MV",
    image: "/works/beatmaster.png",
    duration: "3:24",
    model: "Seedance 2.5",
    createdAt: "2026-09",
    views: "58.1K",
    description:
      "An energetic neon concert cut synced to the drop. The dancer silhouette and light beams were locked to the beat map in the storyboard, then the multi-angle camera control timed every whip-pan to the snare.",
    prompt:
      "Energetic neon-lit concert stage, dancer silhouette mid-movement, magenta and cyan stage lights, volumetric haze, motion-blurred light beams, vibrant club atmosphere.",
  },
  {
    slug: "beyond-the-moment",
    title: "Beyond the Moment",
    author: "Y1-B0",
    tag: "AI Film",
    image: "/works/beyond-the-moment.png",
    duration: "2:05",
    model: "Kling",
    createdAt: "2026-09",
    views: "22.8K",
    description:
      "A lone figure waits on a fog-shrouded platform while the city glows in the distance. The Storyboard Creator locked the train-station geography so every reverse angle matched, and the Director Canvas pushed the camera through the haze.",
    prompt:
      "Lone hooded figure on a foggy abandoned train platform at blue hour, distant city lights, melancholic atmosphere, cinematic 35mm grain, widescreen, muted teal and amber grading.",
  },
  {
    slug: "paper-city",
    title: "Paper City",
    author: "Momo",
    tag: "Animation",
    image: "/works/paper-city.png",
    duration: "1:33",
    model: "Google Omni",
    createdAt: "2026-07",
    views: "19.4K",
    description:
      "A charming miniature metropolis built from folded paper. Stop-motion timing and paper textures were preserved shot-to-shot by pinning material references inside the storyboard panels.",
    prompt:
      "Charming miniature city made of folded paper and cardboard, tiny moving cars and trees, soft warm daylight, stop-motion style, gentle depth of field, cozy pastel tones.",
  },
  {
    slug: "biolearn",
    title: "BioLearn",
    author: "Dance",
    tag: "MV",
    image: "/works/biolearn.png",
    duration: "4:01",
    model: "Veo 3.1",
    createdAt: "2026-08",
    views: "36.2K",
    description:
      "A futuristic explainer-music video where a holographic biology cell pulses to the beat. Neon particles and DNA strands were layered in real time so the visuals never fight the vocal hook.",
    prompt:
      "Futuristic educational scene with a glowing holographic biology cell, neon data particles and DNA helix, clean dark tech aesthetic, cyan and magenta accents, widescreen.",
  },
];
