import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../../components/book/book";
class Shop extends React.Component {
  constructor() {
    super();

    this.state = {
      books: BOOKS_DATA
    };
  }

  render() {
    const { books } = this.state;
    return (
      <div className="shop">
        {books.map(({ id, ...otherProps }) => (
          <Book key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
