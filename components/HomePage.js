import NavBar from "./NavBar";
import Products from "./Products";
import Slider from "./Slider";

export default function HomePage() {
 
  return (
    <div className="max-w-7xl mx-auto ">
      <NavBar />
      <Slider />
      <Products />
    </div>
  );
}
