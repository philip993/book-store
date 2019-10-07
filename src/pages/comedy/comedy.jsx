import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";
import Information from "../../components/information/information";

const Comedy = props => {
  const comedyBooks = BOOKS_DATA.filter(book => book.category === "comedy").map(
    ({ id, ...otherProps }) => <Book key={id} {...otherProps} />
  );

  return (
    <div className="comedy">
      <h2>COMEDY CATEGORY</h2>
      {comedyBooks ? comedyBooks : <Information />}
    </div>
  );
};

export default Comedy;
