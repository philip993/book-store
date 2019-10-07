import React from "react";

import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";

const Action = props => (
  <div className="acton">
    <h2>ACTION CATEGORY</h2>
    {BOOKS_DATA.filter(b => b.category === "action").map(item =>
      item.category === "action" ? (
        <Book key={item.id} title={item.title} category={item.category} />
      ) : (
        "THERE ARENT ANY BOOKS IN THIS CATEGORY YET."
      )
    )}
  </div>
);

export default Action;
