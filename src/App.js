import React, { PureComponent } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "./assets/styles/app.scss";

import { Home } from "./containers";
import { GameFactory } from "./elements";

export default class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <GameFactory>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route render={() => <Redirect to="/" />} />
          </div>
        </GameFactory>
      </BrowserRouter>
    );
  }
}
