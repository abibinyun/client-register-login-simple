import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  let token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
