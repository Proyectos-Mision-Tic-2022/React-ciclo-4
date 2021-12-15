import React from "react";
import {Outlet} from 'react-router-dom';

const LayoutAdmin = () => {
  return (
    <div>
      <nav>Es es el navbar de admin</nav>
        <Outlet/>
    </div>
  );
};

export default LayoutAdmin;
