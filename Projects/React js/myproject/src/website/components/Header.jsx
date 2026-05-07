import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { LuMoon, LuSun, LuShoppingCart, LuSearch, LuUser, LuMenu, LuX } from "react-icons/lu";
import { useTheme } from "../../context/ThemeContext";

function Header() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("customer_id");
  const name = localStorage.getItem("customer_name");
  const image = localStorage.getItem("customer_image");

  const handleLogout = () => {
    localStorage.removeItem("customer_id");
    localStorage.removeItem("customer_name");
    localStorage.removeItem("customer_image");
    navigate("/login");
    Swal.fire({
      title: "Logged Out",
      text: "See you again soon.",
      icon: "success",
      confirmButtonColor: "var(--accent-primary)"
    });
  };

  const fetchCategories = async () => {
    try {
      const res = await axios.get("http://localhost:5000/categories");
      setCategories(res.data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const getCategoryLink = (catName) => {
    const name = catName.toLowerCase();
    if (name.includes("traditional")) return "/traditional-sweets";
    if (name.includes("dry fruit")) return "/dryfruit-sweets";
    return `/category/${catName.replace(/\s+/g, "-").toLowerCase()}`;
  };

  return (
    <header className="site-header">
      <div className="container-minimal">
        <div className="header-inner">
          {/* ✅ Logo */}
          <NavLink to="/" className="header-logo font-display">
            Jayhind <span>Sweets</span>
          </NavLink>

          {/* ✅ Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <li><NavLink to="/" end>Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li className="has-dropdown">
                <NavLink to="#">Collection</NavLink>
                <ul className="dropdown-menu">
                  {loading ? (
                    <li><span className="skeleton" style={{width: '100px', height: '20px'}}></span></li>
                  ) : (
                    categories.map(cat => (
                      <li key={cat.id}>
                        <NavLink to={getCategoryLink(cat.name)}>{cat.name}</NavLink>
                      </li>
                    ))
                  )}
                </ul>
              </li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          {/* ✅ Actions */}
          <div className="header-actions">
            <button onClick={toggleTheme} className="action-btn theme-toggle" aria-label="Toggle Theme">
              {theme === "light" ? <LuMoon size={20} /> : <LuSun size={20} />}
            </button>
            
            <NavLink to="/cart" className="action-btn cart-link">
              <LuShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </NavLink>

            <div 
              className="user-profile-trigger"
              onMouseEnter={() => setShowUserMenu(true)}
              onMouseLeave={() => setShowUserMenu(false)}
            >
              <button className="action-btn">
                {image ? (
                  <img src={image} alt="User" className="user-avatar-small" />
                ) : (
                  <LuUser size={20} />
                )}
              </button>
              
              {showUserMenu && (
                <div className="user-dropdown">
                  {isLoggedIn ? (
                    <>
                      <div className="user-info-brief">
                        <span className="user-name-small">{name}</span>
                      </div>
                      <NavLink to="/profile">My Account</NavLink>
                      <button onClick={handleLogout} className="logout-btn-minimal">Sign Out</button>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login">Sign In</NavLink>
                      <NavLink to="/signup">Join Us</NavLink>
                    </>
                  )}
                </div>
              )}
            </div>

            <button 
              className="mobile-menu-toggle action-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay font-display">
          <nav className="mobile-nav">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</NavLink>
            <NavLink to="/traditional-sweets" onClick={() => setIsMobileMenuOpen(false)}>Collection</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</NavLink>
            <div className="mobile-auth-links">
              {isLoggedIn ? (
                <button onClick={handleLogout}>Sign Out</button>
              ) : (
                <NavLink to="/login" onClick={() => setIsMobileMenuOpen(false)}>Sign In</NavLink>
              )}
            </div>
          </nav>
        </div>
      )}

      <style>{`
        .site-header {
          height: 80px;
          background-color: var(--bg-base);
          border-bottom: 1px solid var(--border-subtle);
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-logo {
          font-size: 28px;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .header-logo span {
          color: var(--text-primary);
          font-weight: 400;
        }

        .nav-list {
          display: flex;
          gap: 32px;
        }

        .nav-list a {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-secondary);
          position: relative;
        }

        .nav-list a:hover, .nav-list a.active {
          color: var(--text-primary);
        }

        .nav-list a.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 1.5px;
          background-color: var(--accent-primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .action-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          position: relative;
        }

        .action-btn:hover {
          color: var(--accent-primary);
        }

        .cart-badge {
          position: absolute;
          top: 0;
          right: 0;
          background-color: var(--accent-primary);
          color: white;
          font-size: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-avatar-small {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-profile-trigger {
          position: relative;
        }

        .user-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 200px;
          background-color: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-elevated);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .user-dropdown a {
          font-size: 14px;
          color: var(--text-secondary);
        }

        .user-dropdown a:hover {
          color: var(--accent-primary);
        }

        .logout-btn-minimal {
          background: none;
          border: none;
          text-align: left;
          font-size: 14px;
          color: var(--danger);
          padding: 0;
          cursor: pointer;
        }

        .has-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 220px;
          background-color: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-elevated);
          padding: 12px 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: var(--transition-smooth);
        }

        .has-dropdown:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-menu a {
          padding: 8px 24px;
          display: block;
          color: var(--text-secondary);
        }

        .dropdown-menu a:hover {
          background-color: var(--bg-surface);
          color: var(--accent-primary);
        }

        .mobile-menu-toggle {
          display: none;
        }

        @media (max-width: 1024px) {
          .desktop-nav { display: none; }
          .mobile-menu-toggle { display: flex; }
        }

        .mobile-overlay {
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: calc(100vh - 80px);
          background-color: var(--bg-base);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .mobile-nav a {
          font-size: 32px;
          color: var(--text-primary);
        }
      `}</style>
    </header>
  );
}

export default Header;
