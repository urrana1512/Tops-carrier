import React from "react";
import { Outlet } from "react-router-dom";
import Adminheader from "./Adminheader";
import Footer from "../../website/components/Footer";

/**
 * AdminLayout manages the dashboard's professional frame.
 * It provides a consistent sidebar and content area for administrative tasks.
 */
function AdminLayout() {
  return (
    <div className="admin-app-wrapper">
      <Adminheader />
      <main className="admin-workspace">
        <div className="admin-content-vessel">
          <Outlet />
        </div>
        <Footer />
      </main>
      
      <style>{`
        .admin-app-wrapper {
          display: flex;
          min-height: 100vh;
          background-color: var(--bg-base);
        }
        
        .admin-workspace {
          flex: 1;
          margin-left: 240px; /* Aligned with sidebar width */
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          transition: var(--transition-smooth);
        }
        
        .admin-content-vessel {
          flex: 1;
          padding: 48px;
        }

        @media (max-width: 1024px) {
          .admin-workspace {
            margin-left: 0 !important;
          }
          .admin-content-vessel {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminLayout;
