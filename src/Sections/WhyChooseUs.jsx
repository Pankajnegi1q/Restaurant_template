import { FaFire, FaLeaf, FaUserTie, FaStar } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section
  id="features"
  className="bg-[#0B0B0B] text-white py-24"
>

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[8px] text-center">
          Why Choose Us
        </p>

        <h2 className="text-5xl text-center mt-4">
          A Dining Experience Like No Other
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <div className="bg-[#181818] rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <FaFire className="text-yellow-400 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl mb-4">Wood Fired</h3>
            <p className="text-gray-400">
              Authentic fire-grilled recipes crafted to perfection.
            </p>
          </div>

          <div className="bg-[#181818] rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <FaLeaf className="text-yellow-400 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl mb-4">Fresh Ingredients</h3>
            <p className="text-gray-400">
              Only the finest locally sourced premium ingredients.
            </p>
          </div>

          <div className="bg-[#181818] rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <FaUserTie className="text-yellow-400 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl mb-4">Master Chefs</h3>
            <p className="text-gray-400">
              World-class chefs delivering unforgettable flavors.
            </p>
          </div>

          <div className="bg-[#181818] rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300">
            <FaStar className="text-yellow-400 text-5xl mx-auto mb-6" />
            <h3 className="text-2xl mb-4">5-Star Service</h3>
            <p className="text-gray-400">
              Exceptional hospitality from the moment you arrive.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;