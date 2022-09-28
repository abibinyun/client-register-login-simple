import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      return navigate("/");
    }, 2000);
  });

  return (
    <div style={{ marginTop: "50px" }}>
      <h1 className="animate__bounceIn">Page Not Found</h1>
    </div>
  );
};
