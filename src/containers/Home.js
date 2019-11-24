import React from "react";
import { FilterForm, ProductList, SideNav } from "../components";
import "./Home.css"

const Home = ({ product, dispatch }) => {
  return (
    <div>
      <div className="Header">
        <label className="TextLogo">App</label>
      </div>
      <SideNav />
      <div className="content">
        <FilterForm dispatch={dispatch} />
        <ProductList data={product} />
      </div>
    </div>
  );
};

export default Home;
