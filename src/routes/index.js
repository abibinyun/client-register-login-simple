import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRoutes from "./PrivateRoutes";

function index() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Profile />} path="/profile" />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/" exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default index;
