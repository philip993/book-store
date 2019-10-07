import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";

const Mistery = () => {
  const misteryBooks = BOOKS_DATA.filter(
    book => book.category === "mistery"
  ).map(({ id, ...otherProps }) => <Book key={id} {...otherProps} />);
  return (
    <div className="mistery">
      <h2>MISTERY CATEGORY</h2>
      {misteryBooks}
    </div>
  );
};

export default Mistery;
