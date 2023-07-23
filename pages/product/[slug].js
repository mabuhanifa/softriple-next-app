import ProductCarousel from "@/components/ProductCarousel";
import {
  addToCart,
  addToWishList,
  removeFromCart,
  removeFromWishList,
} from "@/redux/slices/productsSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscTrash } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
  const { query } = useRouter();
  const { products, cart, wishList } = useSelector((state) => state.products);
  const product = products.find((item) => item.id === query.slug);

  const inCart = cart.some((item) => item.id === product?.id);

  const inWishList = wishList.some((item) => item.id === product?.id);

  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState({
    ...product,
    selectedSize: product?.product?.sizes[0],
  });
  console.log(selectedProduct);

  return (
    <div className="max-w-[1400px] mx-5 md:mx-auto my-10 ">
      <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductCarousel images={product?.product?.images} />
        </div>

        <div className="flex-[1] py-3">
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            {product?.product?.name}
          </div>

          <div className="flex items-center my-3">
            <p className="mr-2 text-lg font-semibold">
              Price : {product?.product?.price}
            </p>
          </div>

          <div className="text-md font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-md font-medium text-black/[0.5] mb-20">
            {`(Also includes all applicable duties)`}
          </div>

          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">Select Size</div>
              <div>
                {product?.product?.sizes?.map((size, index) => (
                  <span
                    className={`text-gray-700 text-sm mr-2 border border-gray-300 px-5 py-2 rounded-full cursor-pointer ${
                      selectedProduct?.selectedSize === size
                        ? "bg-gray-400 text-white"
                        : ""
                    }`}
                    key={index}
                    onClick={() => {
                      setSelectedProduct({
                        ...selectedProduct,
                        selectedSize: size,
                      });
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {inCart ? (
            <button
              className="w-full py-4 rounded-full bg-red-600 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => dispatch(removeFromCart(selectedProduct?.id))}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() =>
                dispatch(addToCart({ ...selectedProduct, quantity: 1 }))
              }
            >
              Add to Cart
            </button>
          )}

          {inWishList ? (
            <button
              className="w-full py-4 rounded-full border bg-red-500 text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10 text-white"
              onClick={() => dispatch(removeFromWishList(selectedProduct?.id))}
            >
              Remove
              <VscTrash size={20} />
            </button>
          ) : (
            <button
              className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"
              onClick={() =>
                dispatch(addToWishList({ ...selectedProduct, quantity: 1 }))
              }
            >
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
          )}

          <div>
            <div className="text-lg font-bold mb-5">Product Details</div>
            <div className="markdown text-md mb-5">
              <p>{product?.product?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
