import { Toaster } from "react-hot-toast";
import Products from "./Products";
import Slider from "./Slider";

export default function HomePage() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Toaster />
      <Slider />
      <Products />
    </div>
  );
}
