import React from "react";
import BOOKS_DATA from "../../assets/BOOKS_DATA";
import Book from "../book/book";

class BookCollection extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: BOOKS_DATA
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div>
        {sections.map(({ id, ...otherProps }) => (
          <Book key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default BookCollection;
