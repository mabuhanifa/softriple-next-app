import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";

export default function Product({ product }) {
  return (
    <div className="text-gray-700 border rounded-md p-4">
      <div className="flex justify-center">
        <Image
          src={product.product.images[0]}
          height={320}
          width={320}
          alt="product"
          className="w-96 object-cover"
        />
      </div>
      <h1 className="text-2xl font-[500] my-3">{product.product.name}</h1>
      <p className="text-[16px]">
        {product.product.description.slice(0, 120)}...
      </p>
      <div className="flex justify-between items-center my-3 ">
        <button className="flex items-center gap-x-3 bg-gray-800 text-gray-100 py-2 px-3 rounded-md">
          <span className="mb-1">
            <LiaShoppingBagSolid size={20} />
          </span>
          <span className="font-[500]">Add To Cart</span>
        </button>
        <button className="flex items-center gap-x-3 border border-gray-300 text-gray-700 py-2.5 px-3 rounded-md group">
          <span className="group-hover:text-red-500">
            <AiOutlineHeart size={20} />
          </span>
          <span className="font-[500]">Add To Wishlist</span>
        </button>
      </div>
    </div>
  );
}
