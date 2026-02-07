import { useNavigate, useParams } from "react-router-dom"
import products from "../data/data";

export default function ProductDetails () {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div>
                <h2>Product not found</h2>
                <button onClick={() => navigate("/products")}>
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>

            <button onClick={() => navigate(-1)}>
                Back to Products
            </button>
        </div>
    )
}