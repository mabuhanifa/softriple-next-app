import Image from "next/image";

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
    </div>
  );
}
