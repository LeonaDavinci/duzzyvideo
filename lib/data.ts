export interface ModelItem {
  name: string;
  desc: string;
  featured?: boolean;
}

export const models: ModelItem[] = [
  { name: "2.5 Model", desc: "4K · 30s clips · 50 assets", featured: true },
  { name: "Seedance 2.0", desc: "Motion-driven video creation" },
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
