import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function ProductsLayout() {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterChange = (newCategory) => {
    setCategory(newCategory);

    if (location.pathname !== "/products") {
      navigate("/products");
    }
  };
  return (
    <div className="productLayout">
      <h2>Our Products</h2>
      <p>Browse our socks collection</p>

      {/* Filter */}
      <div className="filter">
        <button
          className={`btn ${category === "All" ? "active" : ""}`}
          onClick={() => handleFilterChange("All")}
        >
          All
        </button>

        <button
          className={`btn ${category === "Men" ? "active" : ""}`}
          onClick={() => handleFilterChange("Men")}
        >
          Men
        </button>

        <button
          className={`btn ${category === "Women" ? "active" : ""}`}
          onClick={() => handleFilterChange("Women")}
        >
          Women
        </button>

        <button
          className={`btn ${category === "Kids" ? "active" : ""}`}
          onClick={() => handleFilterChange("Kids")}
        >
          Kids
        </button>
      </div>

      <Outlet context={{ category }} />
    </div>
  );
}
