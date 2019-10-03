import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "./../../assets/shopping-bag.svg.svg";

import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-links">
          <Link to="/" className="link">
            Homepage
          </Link>

          <Link to="/shop" className="link">
            Shop
          </Link>
          <Link to="/signin" className="link">
            Sign In
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
        </div>
        <CartIcon className="cart-icon" />
      </div>
    );
  }
}

export default Header;
