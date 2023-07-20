import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
  const { products } = useSelector((state) => state.products);
  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;
  const topProducts = products.slice().sort((a, b) => {
    return findAvg(b.reviews) - findAvg(a.reviews);
  });
  return (
    <div>
      <div className="grid grid-cols-3">
        {topProducts &&
          topProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
