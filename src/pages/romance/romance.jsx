import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";
import Information from "../../components/information/information";

const Romance = props => {
  const romanceBooks = BOOKS_DATA.filter(
    book => book.category === "romance"
  ).map(book => (
    <Book
      key={book.id}
      title={book.title}
      category={book.category}
      price={book.price}
    />
  ));

  return (
    <div className="romance">
      <h2>ROMANCE CATEGORY</h2>
      {romanceBooks ? romanceBooks : <Information />}
    </div>
  );
};

export default Romance;
