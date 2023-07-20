import { useSelector } from "react-redux";

export default function Products() {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <div className="flex justify-center flex-wrap">
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.product.name}</h1>
            <img src={product.product.images[0]} alt="" className="w-80" />
          </div>
        ))}
      </div>
    </div>
  );
}
