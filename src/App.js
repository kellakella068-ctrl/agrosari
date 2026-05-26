import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Product />

      <Blog />

      <Contact />

      <Footer />
    </>
  );
}

export default App;