import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-[#050b16]/90 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="text-xl md:text-2xl font-bold text-white">
              GENCEY
              <span className="text-orange-500"> GLOBAL</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#home"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </a>

            <a
              href="#services"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              Services
            </a>

            <a
              href="#solutions"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              Solutions
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              Our Work
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
            >
              Contact
            </a>

          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">

            <a
              href="#contact"
              className="
                bg-orange-500
                text-white
                px-6
                py-3
                rounded-full
                font-medium
                hover:bg-orange-600
                hover:-translate-y-1
                transition-all
                duration-300
                shadow-lg
                shadow-orange-500/20
              "
            >
              Let's Talk
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-[#050b16] border-t border-white/10">

            <div className="px-6 py-6 flex flex-col gap-5">

              <a
                href="#home"
                className="text-gray-300 hover:text-orange-500"
              >
                Home
              </a>

              <a
                href="#services"
                className="text-gray-300 hover:text-orange-500"
              >
                Services
              </a>

              <a
                href="#solutions"
                className="text-gray-300 hover:text-orange-500"
              >
                Solutions
              </a>

              <a
                href="#projects"
                className="text-gray-300 hover:text-orange-500"
              >
                Our Work
              </a>

              <a
                href="#about"
                className="text-gray-300 hover:text-orange-500"
              >
                About
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:text-orange-500"
              >
                Contact
              </a>

              <a
                href="#contact"
                className="
                  bg-orange-500
                  text-white
                  text-center
                  py-3
                  rounded-full
                  font-medium
                "
              >
                Let's Talk
              </a>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;