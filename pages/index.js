import { setProducts } from "@/redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  return (
    <main>
      <div>
        <button onClick={() => dispatch(setProducts("hello"))}>hi</button>
      </div>
    </main>
  );
}
