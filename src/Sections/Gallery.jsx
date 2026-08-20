    import heroFood from "../assets/images/hero-food.png.webp";
    function Gallery() {
    return (
      <section
  id="gallery"
  className="bg-[#111111] py-24 text-white"
>
        <div className="max-w-7xl mx-auto px-6">

            <p className="text-yellow-400 uppercase tracking-[8px] text-center">
            Gallery
            </p>

            <h2 className="text-4xl md:text-5xl text-center mt-4">
            Moments Worth Remembering
            </h2>

            <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6">
            Discover our beautifully crafted dishes and elegant dining
            experience through our gallery.
            </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

    <img
        src={heroFood}
        alt="Gallery"
        className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition-all duration-500"
    />

    <img
        src={heroFood}
        alt="Gallery"
        className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition-all duration-500"
    />

    <img
        src={heroFood}
        alt="Gallery"
        className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition-all duration-500"
    />

    </div>
        </div>
        </section>
    );
    }

    export default Gallery;