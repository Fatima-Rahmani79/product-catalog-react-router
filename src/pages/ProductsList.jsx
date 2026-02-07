import { Link } from "react-router-dom"
import products from "../data/data"

export default function ProductsList() {
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name} width="150"/>

                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}