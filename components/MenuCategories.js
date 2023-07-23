import { setFilter } from "@/redux/slices/productsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function MenuCategories() {
  const dispatch = useDispatch();

  const categories = [
    { id: 1, name: "Shoes", value: "Shoes" },
    { id: 2, name: "Accessories", value: "Accessories" },
    { id: 3, name: "Jackets", value: "Jacket" },
    { id: 4, name: "Shirts", value: "Shirt" },
    { id: 5, name: "Pants", value: "Pants" },
  ];

  const [value, setValue] = useState("Shirt");
  return (
    <select
      value={value ? value : "Select a Category"}
      onChange={(event) => {
        setValue(event.target.value);
        dispatch(setFilter(event.target.value));
      }}
      className="px-20 py-2"
    >
      {categories.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
