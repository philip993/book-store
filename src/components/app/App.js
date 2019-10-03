import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage/homepage";
import Header from "../header/header";
import Footer from "../footer/footer";

import "./App.css";
import Shop from "../../pages/shop/shop";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/shop" component={Shop}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
