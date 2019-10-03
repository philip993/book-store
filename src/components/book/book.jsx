import React from "react";

const Book = ({ category, title, info }) => (
  <div className="book">
    <h3>{title}</h3>
    <p>{category}</p>
    <span>{info}</span>
  </div>
);

export default Book;
