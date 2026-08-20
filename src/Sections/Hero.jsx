import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Button from "../Components/Button";
import heroFood from "../assets/images/hero-food.png.webp";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0B0B0B] text-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-28"
    >
      {/* LEFT SIDE */}

      <div className="w-full lg:w-1/2">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>

          <p className="text-yellow-400 uppercase tracking-[4px] text-sm">
            Luxury Fine Dining
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl xl:text-7xl leading-tight"
        >
          EMBER & OAK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mt-8 max-w-lg leading-8"
        >
          Experience handcrafted cuisine prepared over open fire,
          paired with exceptional hospitality and unforgettable
          dining moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 mt-10"
        >
          {/* Reserve Button */}
          <Link
            to="reservation"
            smooth={true}
            duration={600}
            offset={-80}
          >
            <Button>
              Reserve Table
            </Button>
          </Link>

          {/* Explore Menu Button */}
          <Link
            to="menu"
            smooth={true}
            duration={600}
            offset={-80}
          >
            <button className="border border-yellow-400 px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Explore Menu
            </button>
          </Link>

        </motion.div>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0">

        <motion.img
          src={heroFood}
          alt="Hero"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full max-w-md lg:max-w-xl hover:scale-105 transition-all duration-500"
        />

      </div>

    </section>
  );
}

export default Hero;