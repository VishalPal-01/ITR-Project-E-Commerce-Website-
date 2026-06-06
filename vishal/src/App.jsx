import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductCards from "./components/ProductCards";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <ProductCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;