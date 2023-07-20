import { addToCart, addToWishList } from "@/redux/slices/productsSlice";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import CategoryBox from "./CategoryBox";
import Star from "./Star";

export default function Product({ product }) {
  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;
  const star = findAvg(product.reviews);
  const dispatch = useDispatch();
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
      <div className="my-3">
        <div>
          {product.product.category.map((category, index) => (
            <CategoryBox category={category} key={index} />
          ))}
        </div>
      </div>
      <div className="flex items-center">
        {star &&
          [...Array(1).keys()].map((_, i) => <Star star={star} key={i} />)}
      </div>
      <div className="flex justify-between items-center my-3 ">
        <button
          className="flex items-center gap-x-3 bg-gray-800 hover:bg-black text-gray-100
           py-2 px-4 active:scale-95 rounded-md"
          onClick={() => {
            dispatch(addToCart(product.product));
          }}
        >
          <span className="mb-1">
            <LiaShoppingBagSolid size={20} />
          </span>
          <span className="font-[500]">Add To Cart</span>
        </button>
        <button
          className="flex items-center gap-x-3 border border-gray-300 text-gray-700 
          py-2.5 px-4 active:scale-95 rounded-md group hover:border-gray-400"
          onClick={() => {
            dispatch(addToWishList(product.product));
          }}
        >
          <span className="group-hover:text-red-500">
            <AiOutlineHeart size={20} className="group-hover:hidden" />
            <AiFillHeart size={20} className="hidden group-hover:block" />
          </span>
          <span className="font-[500]">Add To Wishlist</span>
        </button>
      </div>
    </div>
  );
}
