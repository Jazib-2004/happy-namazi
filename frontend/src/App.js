import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return <div className="w-full">
    <Navbar/>
    <Hero/>
    <Products/>
  </div>;
}

export default App;

