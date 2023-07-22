import {
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "@/redux/slices/productsSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { VscTrash } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import CategoryBox from "./CategoryBox";
import Star from "./Star";

export default function Product({ product }) {
  const { cart, wishList } = useSelector((state) => state.products);

  const inCart = cart.some((item) => item.id === product.id);

  const inWishList = wishList.some((item) => item.id === product.id);

  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;

  const star = findAvg(product.reviews);

  const dispatch = useDispatch();

  const router = useRouter();

  const pusher = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div className="text-gray-700 border rounded-md p-4">
      <div className="flex justify-center items-center relative group">
        <Image
          src={product.product.images[0]}
          height={320}
          width={320}
          alt="product"
          className="w-96 object-cover"
          onClick={pusher}
        />
        <div className="absolute bottom-5 hidden group-hover:block">
          <button
            className="flex justify-center items-center gap-x-5 text-base px-5 py-3 rounded-lg font-[500] text-white bg-gray-700"
            onClick={pusher}
          >
            <span>View</span>
            <GoLinkExternal size={20} />
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-[500] my-3 cursor-pointer" onClick={pusher}>
        {product.product.name}
      </h1>
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
        {inCart ? (
          <button
            className="flex items-center gap-x-1 bg-red-600 hover:bg-red-800 text-gray-100
                       py-2.5 px-4 active:scale-95 rounded-md text-xs"
            onClick={() => {
              dispatch(removeFromCart(product.id));
              toast.success("Product Removed from Cart");
            }}
          >
            <VscTrash size={20} />

            <span className="font-[500]">Remove</span>
          </button>
        ) : (
          <button
            className="flex items-center gap-x-3 bg-gray-800 hover:bg-black text-gray-100
                       py-2 px-4 active:scale-95 rounded-md"
            onClick={() => {
              dispatch(addToCart({ ...product, quantity: 1 }));
              toast.success("Product Added To Cart");
            }}
          >
            <span className="mb-1">
              <LiaShoppingBagSolid size={20} />
            </span>
            <span className="font-[500]">Add To Cart</span>
          </button>
        )}
        {inWishList ? (
          <button
            className="flex items-center gap-x-1 bg-red-600 hover:bg-red-800 text-gray-100
                     py-2.5 px-4 active:scale-95 rounded-md text-xs"
            onClick={() => {
              dispatch(removeFromWishList(product.id));
              toast.success("Product Removed from Cart");
            }}
          >
            <VscTrash size={20} />

            <span className="font-[500]">Remove</span>
          </button>
        ) : (
          <button
            className="flex items-center gap-x-3 border border-gray-300 text-gray-700 
                       py-2.5 px-4 active:scale-95 rounded-md group hover:border-gray-400"
            onClick={() => {
              dispatch(addToWishList(product));
              toast.success("Product Added To Wishlist");
            }}
          >
            <span className="group-hover:text-red-500">
              <AiOutlineHeart size={20} className="group-hover:hidden" />
              <AiFillHeart size={20} className="hidden group-hover:block" />
            </span>
            <span className="font-[500]">Add To Wishlist</span>
          </button>
        )}
      </div>
    </div>
  );
}
