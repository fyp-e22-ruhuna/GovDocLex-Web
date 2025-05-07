import About from "@/section/home/About";
import Hero from "@/section/home/Home";

import KeyFeatures from '@/section/KeyFeatures'
import TrackEverything from '@/section/TrackEverything'
import GovDocLexFeatures from '@/section/SmartExtraction'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <KeyFeatures />
      <GovDocLexFeatures />
      <TrackEverything />
      
   
    </div>
  );
};

export default Home;
