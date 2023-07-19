import HomePage from "@/components/HomePage";
import { useSelector } from "react-redux";

export default function Home() {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <main>
      <HomePage />
    </main>
  );
}
