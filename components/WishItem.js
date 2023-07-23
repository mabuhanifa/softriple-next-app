import {
  removeFromWishList
} from "@/redux/slices/productsSlice";
import Image from "next/image";
import { VscTrash } from "react-icons/vsc";
import { useDispatch } from "react-redux";

export default function WishItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center border-b my-5 py-3">
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
            {item.product.category[0]}&apos;s {item.product.category[1]}
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
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-10 text-gray-500">
        <p>MRP: {item.product.price}</p>
        <button onClick={() => dispatch(removeFromWishList(item.id))}>
          <VscTrash size={20} />
        </button>
      </div>
    </div>
  );
}
