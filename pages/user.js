import Link from "next/link";
import { useSelector } from "react-redux";

export default function User() {
  const { user } = useSelector((state) => state.products);
  return (
    <div className="max-w-[1400px] mx-auto min-h-[80vh] my-10">
      <h1 className="text-2xl font-bold text-center">User Page</h1>

      <div className="flex justify-center items-center my-10">
        {user ? (
          <>
            <h2 className="text-xl font-bold text-center">Logged User</h2>
            <span className="text-xl font-bold text-center ml-5 text-gray-500">
              {" " + user ? user : "No User"}
            </span>
          </>
        ) : (
          <p>
            <span className="text-green-500 font-semibold mx-5 text-lg">
              <Link href={"/login"}>Login</Link>
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
