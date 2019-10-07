import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../book/book";

const TrendingItems = () => {
  const trendingBooks = BOOKS_DATA.filter(book => book.isTrending).map(
    ({ id, ...otherProps }) => <Book key={id} {...otherProps} />
  );

  const getRandomBook = () => {
    const index = Math.floor(Math.random() * trendingBooks.length);
    return trendingBooks[index];
  };

  return (
    <div className="trending">
      <h2 className="trending-title">TRENDING BOOKS NOW:</h2>
      {getRandomBook(trendingBooks)}
    </div>
  );
};

export default TrendingItems;
