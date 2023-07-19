import HomePage from "@/components/HomePage";
import { useEffect } from "react";
import json from "../data/products.json";

export default function Home() {
  useEffect(() => {
   const data = JSON.stringify(json);
    console.log(JSON.parse(data));
  }, []);
  return (
    <main>
      <HomePage />
    </main>
  );
}
