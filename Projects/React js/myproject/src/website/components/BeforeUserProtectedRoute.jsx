import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function BeforeUserProtectedRoute() {
  const isLoggedIn = localStorage.getItem("customer_id");
  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}

export default BeforeUserProtectedRoute;
