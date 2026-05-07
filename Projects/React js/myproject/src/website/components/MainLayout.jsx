import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/**
 * MainLayout provides the consistent aesthetic frame for the website.
 * It manages the persistent Header and Footer during navigation.
 */
function MainLayout() {
  return (
    <div className="main-site-wrapper">
      <Header />
      <main className="main-content-area">
        <Outlet />
      </main>
      <Footer />
      
      <style>{`
        .main-site-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content-area {
          flex: 1;
        }
      `}</style>
    </div>
  );
}

export default MainLayout;
