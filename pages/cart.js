import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/slices/productsSlice";
import Image from "next/image";
import { VscTrash } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const { cart, wishList } = useSelector((state) => state.products);

  const inCart = cart.some((item) => item.id === product.id);

  const inWishList = wishList.some((item) => item.id === product.id);

  const dispatch = useDispatch();

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
              <div
                key={item.id}
                className="flex justify-between items-center border-b my-5 py-3"
              >
                <div className="flex items-center gap-x-5">
                  <Image
                    width={100}
                    height={100}
                    src={item.product.images[0]}
                    alt={"cart-image"}
                    className="w-20 object-cover rounded-md"
                  />
                  <div>
                    <h1 className="text-lg font-bold text-gray-700">
                      {item.product.name}
                    </h1>
                    <p className="text-base font-bold text-gray-400 my-1">
                      {item.product.category[0]}&apos;s{" "}
                      {item.product.category[1]}
                    </p>
                    <div className="flex items-center gap-x-2 text-gray-500 text-sm">
                      <div className="flex items-center gap-x-2 text-gray-500 text-sm">
                        <p className="font-bold my-1">Size :</p>
                        <select name="size" id="size">
                          {item.product.sizes.map((size, i) => (
                            <option value={size} key={i}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex items-center gap-x-2 text-gray-500 text-sm">
                        <p className="font-bold my-1">Quantity :</p>
                        <div className="flex items-center gap-x-5 text-gray-500 text-sm">
                          <button
                            className="text-xl px-2 border rounded"
                            onClick={() => {
                              dispatch(decreaseQuantity(item.id));
                            }}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            className="text-xl px-2 border rounded"
                            onClick={() => {
                              dispatch(increaseQuantity(item.id));
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-y-10 text-gray-500">
                  <p>MRP: {item.product.price}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    <VscTrash size={20} />
                  </button>
                </div>
              </div>
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
