import React from "react";

import BookCollection from "../../components/book-collection/book-collection";

import "./shop.scss";

class Shop extends React.Component {
  render() {
    return (
      <div className="shop">
        <BookCollection />
      </div>
    );
  }
}

export default Shop;
