import React, { Component } from "react";
import { LogoPlace } from "../../elements";
import logo from './logo.png';

export default class Footer extends Component {
  render() {
    return (
      <LogoPlace>
        <a href="https://www.koala42.com"><img src={logo} alt="logo" /></a>
      </LogoPlace>
    );
  }
}
