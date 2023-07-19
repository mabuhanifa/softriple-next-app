import { CiLogin, CiSearch } from "react-icons/ci";

import { AiOutlineHeart } from "react-icons/ai";

import Link from "next/link";
import { BsCart, BsChevronDown } from "react-icons/bs";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center text-black/75 font-[500] border-b py-5">
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
          className="pl-10 py-2 rounded border border-black/10"
          placeholder="Search"
        />
        <span className="absolute top-2.5 left-2 text-2xl text-black/50">
          <CiSearch />
        </span>
      </div>
      <div>
        <ul className="flex items-center justify-around gap-x-5 text-gray-700">
          <li>
            <Link href={"/cart"}>
              <BsCart size={20} />
            </Link>
          </li>
          <li>
            <Link href={"/wishlist"}>
              <AiOutlineHeart size={20} />
            </Link>
          </li>
          <li className="text-gray-900">
            <Link href={"/user"}>
              <CiLogin size={20} />
            </Link>
          </li>
          {/* <li className="text-gray-900">
          <Link href={'/cart'}>
            <CiLogout size={20}/>
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
