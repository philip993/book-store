import React from "react";
import TrendingItems from "../../components/trending/trending-item";
import CategoryItems from "../../components/category-items/category-items";
import Category from "../../components/category/category";
import OnSaleItem from "../../components/on-sales/on-sales-item";

import "./homepage.scss";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="home-items">
          <TrendingItems />
          <OnSaleItem />
        </div>

        <CategoryItems />
        <Category />
      </div>
    );
  }
}

export default Homepage;
