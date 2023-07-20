import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { cart, wishList } = useSelector((state) => state.products);

  return (
    <nav className="flex justify-between items-center text-black/75 font-[500] border-b py-5 xl:px-60 px-10">
      <div>
        <Link href={"/"}>
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <h1>Category</h1>
        <span className="mt-1">
          <BsChevronDown />
        </span>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          className="pl-10 py-2.5 rounded border border-black/10"
          placeholder="Search"
        />
        <span className="absolute left-2 text-2xl text-black/50">
          <CiSearch />
        </span>
      </div>
      <div>
        <div className="flex items-center justify-around gap-x-10 text-gray-700">
          <div className="relative flex items-center">
            <Link href={"/cart"}>
              <LiaShoppingBagSolid size={20} />
            </Link>
            <span
              className={`absolute bottom-2.5 left-2.5 bg-red-600 rounded-full px-1.5 py-0.5 text-white text-xs ${
                cart.length ? "" : "hidden"
              }`}
            >
              {cart.length}
            </span>
          </div>
          <div className="relative flex items-center">
            <Link href={"/wishlist"}>
              <AiOutlineHeart size={20} />
            </Link>
            <span
              className={`absolute bottom-3 left-3 bg-red-600 rounded-full px-1.5 py-0.5 text-white text-xs ${
                wishList.length ? "" : "hidden"
              }`}
            >
              {wishList.length}
            </span>
          </div>
          <div className="text-gray-900">
            <Link href={"/user"}>
              <BiUser size={20} />
            </Link>
          </div>
          {/* <li className="text-gray-900">
          <Link href={'/cart'}>
            <CiLogout size={20}/>
            </Link>
          </li> */}
        </div>
      </div>
    </nav>
  );
}
