import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedDishes from "./components/FeaturedDishes";
import About from "./components/About";
import ChefSection from "./components/ChefSection";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <About />
      <ChefSection />
      <Testimonials />
      <Gallery/>
      <Reservation/>
    </>
  );
}

export default App;