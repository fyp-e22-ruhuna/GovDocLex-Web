import About from "@/section/home/About";
import Hero from "@/section/home/Home";

import KeyFeatures from "@/section/KeyFeatures";
import TrackEverything from "@/section/TrackEverything";
import GovDocLexFeatures from "@/section/SmartExtraction";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />

      <section id="features">
        <KeyFeatures />
      </section>

      <GovDocLexFeatures />

      <section id="explore">
        <TrackEverything />
      </section>
    </div>
  );
};

export default Home;
