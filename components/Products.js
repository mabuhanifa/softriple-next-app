import { useSelector } from "react-redux";
import Product from "./Product";

export default function Products() {
  const { products, filter } = useSelector((state) => state.products);

  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;

  const filterByRegex = (products, filter) => {
    const regex = new RegExp(filter, "i");

    return products.filter(
      (product) =>
        regex.test(product.product.category.join(" ").toLowerCase()) ||
        regex.test(product.product.colors.join(" ").toLowerCase()) ||
        regex.test(product.product.name.toLowerCase()) ||
        regex.test(product.product.description.toLowerCase())
    );
  };

  const topProducts = products
    .slice()
    .sort((a, b) => {
      return findAvg(b.reviews) - findAvg(a.reviews);
    })
    .filter((product) =>
      filter ? filterByRegex([product], filter).length > 0 : true
    );

  return (
    <div className="my-10">
      {filter ? (
        <h1 className="text-2xl font-bold text-center my-5">
          {topProducts.length} Products found
        </h1>
      ) : (
        <h1 className="text-2xl font-bold text-center my-5">ALL Products</h1>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 place-items-center px-10">
        {topProducts &&
          topProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
