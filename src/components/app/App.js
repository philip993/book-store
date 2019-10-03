import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "../../pages/homepage/homepage";
import Header from "../header/header";
import Footer from "../footer/footer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
