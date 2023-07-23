export default function MenuCategories() {
  const categories = [
    { id: 1, name: "Shoes", value: "Shoes" },
    { id: 2, name: "Accessories", value: "Accessories" },
    { id: 3, name: "Jackets", value: "Jacket" },
    { id: 4, name: "Shirts", value: "Shirt" },
    { id: 5, name: "Pants", value: "Pants" },
  ];
  return (
    <select className="flex flex-col">
      {categories.map((category) => (
        <option key={category.id} className="border-t py-2">
          {category.name}
        </option>
      ))}
    </select>
  );
}
