import React from "react";
import TrendingItems from "../../components/trending/trending-item";
import CategoryItems from "../../components/category-items/category-items";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <TrendingItems />
        <CategoryItems />
      </div>
    );
  }
}

export default Homepage;
