import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import EventsShowcase from "./EventsShowcase";
import ResultsShowcase from "./ResultsShowcase";
import Footer from "./Footer";
import CommunitySection from "./CommunitySection";

function Home() {
  return (
    <div className="w-screen h-screen">
      <HeroSection />
      <CommunitySection />
      <BenefitsSection />
      <EventsShowcase />
      <ResultsShowcase />
      <Footer />
    </div>
  )
}

export default Home
