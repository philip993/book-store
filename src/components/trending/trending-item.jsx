import React from "react";

class TrendingItems extends React.Component {
  render() {
    return (
      <div className="trending">
        <h3 className="trending-title">TRENDING BOOKS NOW:</h3>
        <div className="trending-item">
          <img src="#" alt="book" className="t-i-img" />
          <span className="t-i-info">Book info</span>
        </div>
      </div>
    );
  }
}

export default TrendingItems;
