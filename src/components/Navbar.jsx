const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-3xl font-bold text-green-600">
          AGROSARI
        </h1>

        <ul className="flex gap-8 font-medium">

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

      </div>

    </nav>
  );
};

export default Navbar;