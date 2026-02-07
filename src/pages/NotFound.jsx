import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notFound">
            <h2>
                <span>404</span> - Page Not Found
            </h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link className="link" to="/products">Go to Products</Link>
        </div>
    );
}