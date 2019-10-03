import React from "react";
import "./App.css";
import Homepage from "../../pages/homepage/homepage";
import Header from "../header/header";
import Footer from "../footer/footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

export default App;
