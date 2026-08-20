import heroFood from "../assets/images/hero-food.png.webp";
function About() {
  return (
  <section
  id="about"
  className="bg-[#111111] text-white py-24"
>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


        {/* Left Side */}

        <div>

          <p className="text-yellow-400 uppercase tracking-[8px]">
            Our Story
          </p>

          <h2 className="text-5xl mt-5">
            Where Fire Meets Passion
          </h2>

          <p className="text-gray-400 mt-8 leading-8">
            At Ember & Oak, every meal is more than food—it's an
            experience. Our chefs blend timeless techniques with
            modern creativity to craft unforgettable dishes over
            open flames.
          </p>

          <p className="text-gray-400 mt-6 leading-8">
            From locally sourced ingredients to handcrafted
            recipes, every plate reflects our dedication to
            excellence and hospitality.
          </p>

        </div>

        {/* Right Side */}

<div className="flex justify-center">

  <img
    src={heroFood}
    alt="About"
    className="w-full max-w-lg rounded-3xl shadow-2xl hover:scale-105 transition-all duration-500"
  />

</div>

      </div>

    </section>
  );
}

export default About;   