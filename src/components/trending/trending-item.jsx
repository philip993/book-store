import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../book/book";

const TrendingItems = ({ isTrending }) => (
  <div className="trending">
    <h3 className="trending-title">TRENDING BOOKS NOW:</h3>
    {BOOKS_DATA.filter(b => b.isTrending === true)
      .filter((item, ind) => ind < 3)
      .map(({ id, title }) => (
        <Book key={id} title={title} />
      ))}
  </div>
);

export default TrendingItems;
