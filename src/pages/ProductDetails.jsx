import { useNavigate, useParams } from "react-router-dom";
import products from "../data/data";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-notFound">
        <h2>Product not found</h2>
        <button className="link" onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="productDetails">
      <img
        className="p-d-image"
        src={product.image}
        alt={product.name}
        width="150"
      />
      <div className="productDetails-info">
        <h2>{product.name}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.description}</p>
        <button className="buy" onClick={()=> alert("Product add to cart successfuly!")}>Add to cart</button>

        <button className="link" onClick={() => navigate(-1)}>
          Back to Products
        </button>
      </div>
    </div>
  );
}
