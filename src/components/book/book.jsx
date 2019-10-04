import React from "react";

import "./book.scss";

const Book = ({ category, title, info, price }) => (
  <div className="book">
    <h3 className="book-title">{title}</h3>
    <span className="book-info">{info}</span>
    <br />
    <span>${price}</span>
    <p className="book-category">{category}</p>
  </div>
);

export default Book;
