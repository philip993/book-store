import React from "react";

import Book from "../../components/book/book";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Information from "../../components/information/information";

const Thriller = props => {
  const thrillerBooks = BOOKS_DATA.filter(
    book => book.category === "thriller"
  ).map(({ id, ...otherProps }) => <Book key={id} {...otherProps} />);

  return (
    <div className="thriller">
      <h2>THRILLER CATEGORY</h2>
      {thrillerBooks ? thrillerBooks : <Information />}
    </div>
  );
};

export default Thriller;
