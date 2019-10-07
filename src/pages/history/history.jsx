import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";
import Information from "../../components/information/information";

const History = () => {
  const historyBooks = BOOKS_DATA.filter(
    book => book.category === "history"
  ).map(({ id, ...otherProps }) => <Book key={id} {...otherProps} />);
  return (
    <div className="history">
      <h2>HISTORY CATEGORY</h2>
      {historyBooks ? historyBooks : <Information />}
    </div>
  );
};

export default History;
