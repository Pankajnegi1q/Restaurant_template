import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Reservation() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    request: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "🎉 Reservation Successful!\n\nWe look forward to welcoming you at Ember & Oak."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
      request: "",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const isFormComplete =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.guests &&
    formData.date &&
    formData.time;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">

      {/* Floating Back Button */}

      <Link
        to="/"
        className="fixed top-8 left-8 z-50 border border-yellow-400 px-5 py-3 rounded-full text-white hover:bg-yellow-400 hover:text-black transition-all duration-300"
      >
        ← Return Home
      </Link>

      <section className="max-w-5xl mx-auto px-6 pt-28 pb-20">

        <p className="text-yellow-400 uppercase tracking-[8px] text-center">
          Reservation
        </p>

        <h1 className="text-5xl md:text-6xl text-center mt-5">
          Reserve Your Table
        </h1>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6 leading-8">
          Book your table in advance and enjoy an unforgettable dining
          experience crafted with passion and elegance.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            min="1"
            value={formData.guests}
            onChange={handleChange}
            className="bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={today}
            className="bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            min="11:00"
            max="23:00"
            className="bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none"
          />

          <textarea
            name="request"
            placeholder="Special Requests (Optional)"
            rows="5"
            value={formData.request}
            onChange={handleChange}
            className="md:col-span-2 bg-[#181818] p-4 rounded-xl border border-gray-700 focus:border-yellow-400 outline-none resize-none"
          />

          <div className="md:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={!isFormComplete}
              className={`px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                isFormComplete
                  ? "bg-yellow-400 text-black hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              Reserve Table
            </button>
          </div>
        </form>

      </section>
    </div>
  );
}

export default Reservation;