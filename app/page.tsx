import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import RightsMonetization from "@/components/sections/RightsMonetization";
import CallerTunes from "@/components/sections/CallerTunes";
import DistributionNetwork from "@/components/sections/DistributionNetwork";
import ArtistSupport from "@/components/sections/ArtistSupport";
import MainCTA from "@/components/sections/MainCTA";
import Contact from "@/components/sections/Contact";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Services / What We Do */}
        <Services />

        {/* Section 3: Rights & Monetization */}
        <RightsMonetization />

        {/* Section 4: Caller Tunes & CRBT */}
        <CallerTunes />

        {/* Section 5: Distribution Network (Platforms) */}
        <DistributionNetwork />

        {/* Section 6: Artist & Catalog Support Ecosystem */}
        <ArtistSupport />

        {/* Section 7: Main CTA Banner */}
        <MainCTA />

        {/* Section 8: Direct Contact & Infringement Reporting Workflow */}
        <Contact />

        {/* Section 9: Operational Base & Map Hub */}
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
