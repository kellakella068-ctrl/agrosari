import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-4">

        <h1 className="text-2xl md:text-3xl font-bold text-green-600">
          AGROSARI
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-green-600 duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-green-600 duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#product"
              className="hover:text-green-600 duration-300"
            >
              Product
            </a>
          </li>

          <li>
            <a
              href="#blog"
              className="hover:text-green-600 duration-300"
            >
              Blog
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-green-600 duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* BUTTON MOBILE */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* MENU MOBILE */}
      {
        menuOpen && (
          <ul className="md:hidden bg-white px-6 pb-4 flex flex-col gap-4 font-medium shadow-lg">

            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>

          </ul>
        )
      }

    </nav>
  );
};

export default Navbar;