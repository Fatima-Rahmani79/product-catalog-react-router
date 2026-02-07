import { useOutletContext } from "react-router-dom";
import products from "../data/data";
import ProductCard from "../components/ProductCard";

export default function ProductsList() {
  const { category } = useOutletContext();

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <div className="productList">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
