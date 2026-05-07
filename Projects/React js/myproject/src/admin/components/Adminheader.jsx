import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { 
  LuLayoutDashboard, 
  LuPackage, 
  LuUsers, 
  LuMessageSquare, 
  LuStar, 
  LuTicket, 
  LuLogOut, 
  LuChevronDown, 
  LuChevronUp,
  LuShoppingBag,
  LuCirclePlus,
  LuList,
  LuMenu,
  LuX
} from "react-icons/lu";

function Adminheader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    products: false,
    categories: false,
    coupons: false
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin_id");
    navigate("/admin-login");
    Swal.fire({
      title: "Admin Logout",
      text: "You have been securely signed out.",
      icon: "success",
      confirmButtonColor: "var(--accent-primary)"
    });
  };

  const toggleSubmenu = (menu) => {
    setOpenMenus(prev => ({ ...prev, [menu]: !prev[menu] }));
  };

  const NavItem = ({ to, icon: Icon, label, hasSubmenu, isOpen, onToggle, children }) => {
    if (hasSubmenu) {
      return (
        <div className="admin-nav-group">
          <button className="admin-nav-item submenu-trigger" onClick={onToggle}>
            <span className="nav-item-content">
              <Icon size={18} className="nav-icon" />
              <span>{label}</span>
            </span>
            {isOpen ? <LuChevronUp size={14} /> : <LuChevronDown size={14} />}
          </button>
          {isOpen && <div className="admin-submenu">{children}</div>}
        </div>
      );
    }

    return (
      <NavLink 
        to={to} 
        className={({ isActive }) => `admin-nav-item ${isActive ? 'active' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      >
        <Icon size={18} className="nav-icon" />
        <span>{label}</span>
      </NavLink>
    );
  };

  return (
    <>
      {/* ✅ Mobile Toggle */}
      <button className="admin-sidebar-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <LuX size={24} /> : <LuMenu size={24} />}
      </button>

      {/* ✅ Sidebar */}
      <aside className={`admin-sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="admin-sidebar-brand font-display">
          Jayhind <span>Admin</span>
        </div>

        <nav className="admin-nav-container">
          <div className="nav-section-label">Management</div>
          
          <NavItem to="/dashboard" icon={LuLayoutDashboard} label="Dashboard" />
          
          <NavItem 
            icon={LuPackage} 
            label="Products" 
            hasSubmenu 
            isOpen={openMenus.products} 
            onToggle={() => toggleSubmenu('products')}
          >
            <NavLink to="/add-product" className="submenu-item"><LuCirclePlus size={14} /> Add New</NavLink>
            <NavLink to="/manage-products" className="submenu-item"><LuList size={14} /> View All</NavLink>
          </NavItem>

          <NavItem 
            icon={LuList} 
            label="Categories" 
            hasSubmenu 
            isOpen={openMenus.categories} 
            onToggle={() => toggleSubmenu('categories')}
          >
            <NavLink to="/add-category" className="submenu-item"><LuCirclePlus size={14} /> Add New</NavLink>
            <NavLink to="/manage-categories" className="submenu-item"><LuList size={14} /> Manage</NavLink>
          </NavItem>

          <NavItem to="/manage-orders" icon={LuShoppingBag} label="Orders" />
          <NavItem to="/manage-customers" icon={LuUsers} label="Customers" />

          <div className="nav-section-label">Engagement</div>
          <NavItem to="/manage-contact" icon={LuMessageSquare} label="Messages" />
          <NavItem to="/manage-feedback" icon={LuStar} label="Feedback" />
          
          <NavItem 
            icon={LuTicket} 
            label="Coupons" 
            hasSubmenu 
            isOpen={openMenus.coupons} 
            onToggle={() => toggleSubmenu('coupons')}
          >
            <NavLink to="/add-coupon" className="submenu-item">Create</NavLink>
            <NavLink to="/manage-coupons" className="submenu-item">Track</NavLink>
          </NavItem>

          <div className="admin-nav-footer">
            <button onClick={handleLogout} className="admin-logout-btn">
              <LuLogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </nav>
      </aside>

      <style>{`
        .admin-sidebar {
          width: 240px;
          height: 100vh;
          background-color: var(--bg-surface);
          border-right: 1px solid var(--border-subtle);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1001;
          display: flex;
          flex-direction: column;
          padding: 24px 16px;
          transition: var(--transition-smooth);
        }

        .admin-sidebar-brand {
          font-size: 24px;
          color: var(--accent-primary);
          margin-bottom: 48px;
          padding-left: 12px;
        }

        .admin-sidebar-brand span {
          color: var(--text-primary);
          font-weight: 400;
        }

        .admin-nav-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow-y: auto;
        }

        .nav-section-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-tertiary);
          margin: 24px 0 8px 12px;
        }

        .admin-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          height: 40px;
          border-radius: var(--radius-sm);
          color: var(--text-secondary);
          font-size: 14px;
          font-weight: 400;
          transition: var(--transition-smooth);
          width: 100%;
          border: none;
          background: none;
          cursor: pointer;
        }

        .nav-item-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .admin-nav-item:hover {
          background-color: var(--border-subtle);
          color: var(--text-primary);
        }

        .admin-nav-item.active {
          background-color: rgba(192, 98, 42, 0.1);
          color: var(--accent-primary);
          border-left: 2px solid var(--accent-primary);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
        }

        .admin-submenu {
          margin-left: 38px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 4px;
          margin-bottom: 8px;
        }

        .submenu-item {
          font-size: 13px;
          color: var(--text-secondary);
          padding: 6px 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .submenu-item:hover {
          color: var(--accent-primary);
        }

        .admin-nav-footer {
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
        }

        .admin-logout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          width: 100%;
          background: none;
          border: none;
          color: var(--danger);
          font-size: 14px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .admin-logout-btn:hover {
          background-color: rgba(185, 64, 64, 0.05);
        }

        .admin-sidebar-toggle {
          display: none;
          position: fixed;
          top: 16px;
          left: 16px;
          z-index: 1002;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @media (max-width: 1024px) {
          .admin-sidebar {
            transform: translateX(-100%);
          }
          .admin-sidebar.mobile-open {
            transform: translateX(0);
          }
          .admin-sidebar-toggle {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}

export default Adminheader;
