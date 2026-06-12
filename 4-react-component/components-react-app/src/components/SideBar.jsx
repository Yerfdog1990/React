// SideBar component - Sidebar for filtering and additional options
// Props: categories (array of categories), onFilterChange (callback function)

export default function SideBar({ categories = ['Electronics', 'Audio', 'Wearables', 'Photography'], onFilterChange }) {
  const handleCategoryClick = (category) => {
    if (onFilterChange) {
      onFilterChange(category);
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Categories</h3>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <button
                className="category-btn"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Price Range</h3>
        <div className="price-filter">
          <label>
            <input type="checkbox" /> Under $200
          </label>
          <label>
            <input type="checkbox" /> $200 - $500
          </label>
          <label>
            <input type="checkbox" /> $500 - $1000
          </label>
          <label>
            <input type="checkbox" /> Over $1000
          </label>
        </div>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-title">Special Offers</h3>
        <ul className="offers-list">
          <li><a href="#sale">Summer Sale ☀️</a></li>
          <li><a href="#new">New Arrivals ✨</a></li>
          <li><a href="#discount">Discounted Items 💰</a></li>
        </ul>
      </div>
    </aside>
  );
}
