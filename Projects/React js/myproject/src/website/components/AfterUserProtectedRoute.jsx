import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AfterUserProtectedRoute() {
  const isLoggedIn = localStorage.getItem("customer_id");
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default AfterUserProtectedRoute;
