import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", type: "scroll", target: "home" },
    { name: "Menu", type: "page", target: "/menu" },
    { name: "About", type: "scroll", target: "about" },
    { name: "Gallery", type: "scroll", target: "gallery" },
    { name: "Contact", type: "scroll", target: "contact" },
  ];

  const handleScroll = (id) => {
    // If we're not on the homepage, go there first.
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-yellow-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-[4px] text-yellow-400 select-none"
        >
          EMBER & OAK
        </Link>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((item) => (
            <li
              key={item.name}
              className="relative group"
            >

              {item.type === "page" ? (

                <Link
                  to={item.target}
                  className="text-white transition-colors duration-300 group-hover:text-yellow-400"
                >
                  {item.name}
                </Link>

              ) : (

                <button
                  onClick={() => handleScroll(item.target)}
                  className="text-white transition-colors duration-300 group-hover:text-yellow-400"
                >
                  {item.name}
                </button>

              )}

              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  w-0
                  bg-yellow-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />

            </li>
          ))}

        </ul>

        {/* Reserve Button */}
        <Link to="/reservation">
          <button
            className="
              hidden
              md:block
              bg-yellow-400
              text-black
              px-6
              py-3
              rounded-full
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              hover:shadow-lg
              hover:shadow-yellow-400/30
            "
          >
            Reserve Table
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;