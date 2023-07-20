import { addToCart, addToWishList } from "@/redux/slices/productsSlice";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import CategoryBox from "./CategoryBox";
import Star from "./Star";

export default function SliderItems({ product }) {
  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;
  const star = findAvg(product.reviews);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col-reverse sm:flex-row gap-x-20 justify-center items-center text-gray-700 p-4">
      <div>
        <h1 className="text-2xl font-[500] my-3">{product.product.name}</h1>
        <div className="w-80 mx-auto text-center">
          <p className="text-[16px]">{product.product.description}</p>
        </div>
        <div className="my-3">
          <div>
            {product.product.category.map((category, index) => (
              <CategoryBox category={category} key={index} />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          {star &&
            [...Array(1).keys()].map((_, i) => <Star star={star} key={i} />)}
        </div>
        <div className="flex flex-col gap-y-5 items-center my-3">
          <button
            className="flex items-center gap-x-3 bg-gray-800 hover:bg-black text-gray-100
           py-3 px-4 active:scale-95 rounded-md"
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
      <div className="flex justify-center items-center mb-3">
        <Image
          src={product.product.images[0]}
          height={320}
          width={320}
          alt="product"
          className="w-60 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}