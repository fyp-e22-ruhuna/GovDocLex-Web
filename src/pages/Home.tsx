import About from "@/section/home/About";
import Hero from "@/section/home/Home";

import KeyFeatures from "@/section/KeyFeatures";
import TrackEverything from "@/section/TrackEverything";
import GovDocLexFeatures from "@/section/SmartExtraction";
import Team from "@/section/home/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section id="about">
        <About />
      </section>

      <section id="features">
        <KeyFeatures />
      </section>

      <GovDocLexFeatures />

      <section id="explore">
        <TrackEverything />
     
      </section>

      <section id="team">
        <Team />
      </section>

    </div>
  );
};

export default Home;
