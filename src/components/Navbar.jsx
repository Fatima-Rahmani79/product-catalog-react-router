import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});

export default function Navbar() {
    return (
        <div>
            <h1>🧦 Socks Store</h1>
            <NavLink to="/" style={linkStyle}>
                Home
            </NavLink>
            <NavLink to="/products" style={linkStyle}>
                Products
            </NavLink>
        </div>

    )
}