import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../book/book";
const OnSaleItem = props => {
  return (
    <div className="onsale-item">
      <h2>Now on sale with -50%</h2>
      {BOOKS_DATA.filter(b => b.onSale === true).map(item => (
        <Book
          key={item.id}
          title={item.title}
          info={item.info}
          category={item.category}
          price={item.price / 2}
        />
      ))}
    </div>
  );
};

export default OnSaleItem;
