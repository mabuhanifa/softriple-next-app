import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import Products from "./Products";
import Slider from "./Slider";

export default function HomePage() {
  const { cart, wishList } = useSelector((state) => state.products);
  console.log(cart, wishList);
  return (
    <div className="max-w-7xl mx-auto ">
      <NavBar />
      <Slider />
      <Products />
    </div>
  );
}
