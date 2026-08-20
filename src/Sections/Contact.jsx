function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B0B0B] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-yellow-400 uppercase tracking-[8px] text-center">
          Contact
        </p>

        <h2 className="text-4xl md:text-5xl text-center mt-4">
          Visit Ember & Oak
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <div className="space-y-8">

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                📍 Address
              </h3>

              <p className="text-gray-400 mt-2">
                21 Luxury Street,
                New Delhi,
                India
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                📞 Phone
              </h3>

              <p className="text-gray-400 mt-2">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                📧 Email
              </h3>

              <p className="text-gray-400 mt-2">
                contact@emberandoak.com
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-xl font-semibold">
                🕒 Opening Hours
              </h3>

              <p className="text-gray-400 mt-2">
                Mon - Sun
                <br />
                11:00 AM – 11:00 PM
              </p>
            </div>

          </div>

          {/* Right */}

          <div className="bg-[#181818] rounded-3xl flex items-center justify-center h-[400px]">

            <h2 className="text-3xl text-gray-500">
              Google Map Coming Soon
            </h2>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;