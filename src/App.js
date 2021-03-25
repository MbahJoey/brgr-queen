import React, { Component } from "react";

import Layout from "./components/layout/layout.component";
import BurgerBuilder from "./containers/burgerBuilder/burger-builder.component";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
