import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  color: isActive ? "#efddc7" : "#fff"
});

export default function Navbar() {
  return (
    <div className="nav-container">
      <h1>🧦 Socks Store</h1>
      <div className="nav-links">
        <NavLink to="/" style={linkStyle}>
          Home
        </NavLink>
        <NavLink to="/products" style={linkStyle}>
          Products
        </NavLink>
      </div>
    </div>
  );
}
