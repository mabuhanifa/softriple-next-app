import Image from "next/image";
import { useRouter } from "next/router";
import { GoLinkExternal } from "react-icons/go";
import CategoryBox from "./CategoryBox";
import Star from "./Star";

export default function SliderItems({ product }) {
  const findAvg = (arr) => arr.reduce((a, b) => b.rating + a, 0) / arr.length;
  const star = findAvg(product.reviews);
  const router = useRouter();
  const pusher = () => {
    router.push(`/product/${product.id}`);
  };

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
        <div className="flex justify-center  items-center my-5">
          <button
            className="flex justify-center items-center gap-x-5 border border-[#cacaca] px-5 py-3 rounded-lg font-[500] hover:bg-gray-700 hover:text-white"
            onClick={pusher}
          >
            <span>View</span>
            <GoLinkExternal />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mb-5">
        <Image
          src={product.product.images[0]}
          height={320}
          width={320}
          alt="product"
          className="w-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
