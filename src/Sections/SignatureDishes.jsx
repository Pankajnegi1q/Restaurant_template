import heroFood from "../assets/Images/hero-food.png.webp"; // Change to .jpg if your image is jpg

function SignatureDishes() {
  return (
<section
  id="menu"
  className="py-24 bg-[#0B0B0B] text-white"
>
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[8px] text-center">
          Our Menu
        </p>

        <h2 className="text-5xl text-center mt-4">
          Signature Dishes
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6">
          Every dish is carefully crafted by our chefs using premium
          ingredients and traditional fire cooking techniques.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {/* Card 1 */}
          <div className="bg-[#181818] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">

            <img
              src={heroFood}
              alt="Steak"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-yellow-400">
                Smoked Wagyu Reserve
              </h3>

              <p className="text-gray-400 mt-3">
                Premium Japanese Wagyu grilled over oak fire.
              </p>

              <p className="text-yellow-400 font-bold text-xl mt-5">
                ₹2,450
              </p>

            </div>

          </div>

          {/* Card 2 */}
          <div className="bg-[#181818] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">

            <img
              src={heroFood}
              alt="Pasta"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-yellow-400">
                Truffle Pasta
              </h3>

              <p className="text-gray-400 mt-3">
                Handmade pasta finished with black truffle cream.
              </p>

              <p className="text-yellow-400 font-bold text-xl mt-5">
                ₹1,650
              </p>

            </div>

          </div>

          {/* Card 3 */}
          <div className="bg-[#181818] rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition-all duration-300">

            <img
              src={heroFood}
              alt="Dessert"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">

              <h3 className="text-2xl font-semibold text-yellow-400">
                Chocolate Lava Cake
              </h3>

              <p className="text-gray-400 mt-3">
                Rich molten chocolate served with vanilla ice cream.
              </p>

              <p className="text-yellow-400 font-bold text-xl mt-5">
                ₹850
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default SignatureDishes;