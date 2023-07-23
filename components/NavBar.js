import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMenuAltRight, BiUser } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";

export default function NavBar() {
  const { cart, wishList } = useSelector((state) => state.products);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav
      className="flex justify-between items-center text-black/75 font-[500] border-b py-5 
                xl:px-60 px-10 text-lg"
    >
      <div>
        <Link href={"/"}>
          <Image
            src="https://i.ibb.co/vHYRXB6/4.jpg"
            alt="logo"
            width={50}
            height={50}
            className="w-10 h-10 object-cover rounded-full"
          />
        </Link>
      </div>
      <div className="md:flex items-center gap-x-3 hidden">
        <h1>Category</h1>
        <span className="mt-1">
          <BsChevronDown />
        </span>
      </div>
      <div className="relative md:flex items-center hidden">
        <input
          type="text"
          className="pl-10 py-2 rounded border border-black/10 text-base"
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
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
