import CartItem from "@/components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector((state) => state.products);

  const total = cart.reduce(
    (acc, item) =>
      acc + item.quantity * Number(item.product.price.split("$")[1]),
    0
  );

  return (
    <div className="max-w-[1400px] mx-auto">
      <h1 className="text-3xl font-bold text-gray-700 text-center mt-20">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-2">
          <h1 className="text-md font-bold text-gray-700">Cart Items</h1>
          <div>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="col-span-1  w-[350px]">
          <h1 className="font-bold text-gray-700 mb-5">Summery</h1>
          <div className="flex flex-col p-5 rounded-lg bg-black/[0.05]">
            <div className="flex items-center justify-between">
              <p>SUBTOTAL</p>
              <p>$ {total.toFixed(2)}</p>
            </div>
            <div className="text-sm md:text-md py-5 border-t border-gray-300 mt-5 leading-7">
              The subtotal reflects the total price of your order, including
              duties and taxes, before any applicable discounts. It does not
              include delivery costs and international transaction fees.
            </div>
          </div>
          {total > 0 && (
            <button className="bg-black text-white p-2.5 rounded-full mt-5 w-[350px]">
              Checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
