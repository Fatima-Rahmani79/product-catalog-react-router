import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="productCard">
        <img src={product.image} alt={product.name} className="p-image" />

        <div className="productCard-info">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
        </div>
      

      <Link className="link" to={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}
