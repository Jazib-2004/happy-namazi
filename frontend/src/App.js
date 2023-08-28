import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cart from "./components/Cart";
function App() {
  return <div className="w-full">
    <Navbar/>
    <Cart/>
    <Hero/>
    <Products/>
  </div>;
}

export default App;

