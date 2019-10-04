import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";

const History = () => (
  <div className="history">
    {BOOKS_DATA.filter(b => b.category === "history").map(item =>
      item.category === "history" ? (
        <Book key={item.id} title={item.title} category={item.category} />
      ) : (
        "THERE ARENT ANY BOOKS IN THIS CATEGORY YET."
      )
    )}
  </div>
);

export default History;
