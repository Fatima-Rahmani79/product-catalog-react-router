import { Outlet } from "react-router-dom";

export function ProductsLayout() {
    return (
        <div>
            <h2>Products</h2>
            <p>Browse our socks collection</p>

            <Outlet/>
        </div>
    );
}