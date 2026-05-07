import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectRoute() {
  const isAdminLoggedIn = localStorage.getItem("admin_id");
  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/admin-login" />;
}

export default ProtectRoute;
