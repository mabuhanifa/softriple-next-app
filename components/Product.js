import Image from "next/image";

export default function Product({ product }) {
  return (
    <div>
      <Image
        src={product.product.images[0]}
        height={320}
        width={320}
        alt="product"
        className="w-80 h-84 object-cover"
      />
      <h1>{product.product.name}</h1>
    </div>
  );
}
