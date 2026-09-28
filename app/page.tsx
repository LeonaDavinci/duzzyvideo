import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StoryboardCreator from "@/components/StoryboardCreator";
import ModelGrid from "@/components/ModelGrid";
import DirectorCanvas from "@/components/DirectorCanvas";
import Showcase from "@/components/Showcase";
import VideoWorks from "@/components/VideoWorks";
import CreativeTools from "@/components/CreativeTools";
import UseCases from "@/components/UseCases";
import Workflow from "@/components/Workflow";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Force SSR for SEO and first meaningful paint.
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StoryboardCreator />
        <ModelGrid />
        <DirectorCanvas />
        <Showcase />
        <VideoWorks />
        <CreativeTools />
        <UseCases />
        <Workflow />
        <Partners />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
