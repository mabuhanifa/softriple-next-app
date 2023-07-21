import { useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector((state) => state.products);
  console.log(cart);
  return (
    <div className="max-w-[1400px] mx-auto">
      <div></div>
    </div>
  );
}
