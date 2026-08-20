import Navbar from "../Components/Navbar";

import Hero from "../Sections/Hero";
import SignatureDishes from "../Sections/SignatureDishes";
import About from "../Sections/About";
import WhyChooseUs from "../Sections/WhyChooseUs";
import Gallery from "../Sections/Gallery";
import Contact from "../Sections/Contact";

function Home() {
  return (
    <div className="bg-[#0B0B0B] text-white">
      <Navbar />

      <Hero />

      <SignatureDishes />

      <About />

      <WhyChooseUs />

      <Gallery />

      <Contact />
    </div>
  );
}

export default Home;