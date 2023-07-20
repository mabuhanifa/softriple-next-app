import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function Star({ star }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="text-yellow-500" size={18}/>
        ) : star >= number ? (
          <FaStarHalfAlt className="text-yellow-500" size={18}/>
        ) : (
          <AiOutlineStar className="text-gray-700 mt-0.5" size={19}/>
        )}
      </span>
    );
  });
  return ratingStar;
}
