import { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../Data/menuData";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredMenu =
    selectedCategory === "All"
      ? menuData
      : menuData.filter(
          (dish) => dish.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* Floating Back Button */}

      <Link
        to="/"
        className="fixed top-8 left-8 z-50 border border-yellow-400 px-5 py-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        ← Return Home
      </Link>

      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20">

        {/* Heading */}

        <p className="text-yellow-400 uppercase tracking-[8px] text-center">
          Our Menu
        </p>

        <h1 className="text-5xl md:text-6xl text-center mt-5">
          Crafted With Passion
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6 leading-8">
          Discover our handcrafted dishes prepared with premium ingredients
          and unforgettable flavors.
        </p>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-5 mt-14">

          {["All", "Main Course", "Starters", "Desserts", "Drinks"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black"
                    : "border border-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                {category}
              </button>
            )
          )}

        </div>

        {/* Menu Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {filteredMenu.map((dish) => (

            <div
              key={dish.id}
              className="bg-[#181818] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-yellow-400/10 transition-all duration-300"
            >

              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-yellow-400">
                  {dish.name}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {dish.description}
                </p>

                <div className="flex justify-between items-center mt-6">

                  <span className="text-yellow-400 text-xl font-bold">
                    {dish.price}
                  </span>

                  <button className="border border-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300">
                    Order
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Menu;