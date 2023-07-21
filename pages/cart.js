import { useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector((state) => state.products);
  console.log(cart);
  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-bold text-gray-700 text-center mt-20">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <h1 className="text-md font-bold text-gray-700">Cart Items</h1>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b my-5 py-3">
                <div className="flex items-center gap-x-5">
                  <img
                    src={item.product.images[0]}
                    alt={item.title}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h1 className="text-lg font-bold text-gray-700">
                      {item.product.name}
                    </h1>
                    <p className="text-base font-bold text-gray-400 my-1">
                      {item.product.category[0]}&apos;s{" "}
                      {item.product.category[1]}
                    </p>
                    <p className="text-sm font-bold text-gray-500 my-1">Size : </p>
                  </div>
                </div>
                <div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <h1>Summery</h1>
          <div></div>
        </div>
      </div>
    </div>
  );
}
