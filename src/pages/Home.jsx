// Components imports
import HeroSection from "../components/Home/HeroSection";
import ScrollingTicker from "../components/Home/ScrollingTicker";
import StatsSection from "../components/Home/StatsSection";
import PillarsSection from "../components/Home/PillarsSection";
import CampusSection from "../components/Home/CampusSection";
import InnovationSection from "../components/Home/InnovationSection";
import CTASection from "../components/Home/CTASection";

const Home = ({ setPage }) => {
  return (
    <div className="space-y-24 pb-32 overflow-hidden">

      {/* HERO */}
      <HeroSection setPage={setPage} />

      {/* TICKER */}
      <ScrollingTicker />

      {/* STATS */}
      <StatsSection />

      {/* PILLARS */}
      <PillarsSection />

      {/* CAMPUS */}
      <CampusSection />

      {/* INNOVATION */}
      <InnovationSection />

      {/* CTA */}
      <CTASection setPage={setPage} />

    </div>
  );
};

export default Home;