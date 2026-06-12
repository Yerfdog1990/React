// Header component - Navigation bar for the app
// Uses React Router Link for navigation
// Displays different content based on whether user is logged in

import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, onLogout }) {
  const handleLogout = () => {
    onLogout();
    alert('Logged out successfully!');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <h1>🛍️ EuroShop</h1>
            </Link>
          </div>

          <nav className="navbar">
            <ul className="nav-links">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <Link to="/orders" className="nav-link">Orders</Link>
                  </li>
                  <li>
                    <button onClick={handleLogout} className="nav-link logout-btn">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login" className="nav-link">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
