import React from "react";
import { Outlet } from "react-router-dom";
import Button from "../components/Button";

const LayoutAdmin = () => {
  return (
    <div>
      <nav>Es es el navbar de admin</nav>
      <Button />
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
