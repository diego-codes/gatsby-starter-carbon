import React, { Component } from "react";
import { InteriorLeftNav, InteriorLeftNavItem } from 'carbon-components-react';
import Link from "gatsby-link";
import "./Navigation.scss";

class Navigation extends Component {
  render() {
    return (
      <InteriorLeftNav className="demo-nav">
        <InteriorLeftNavItem>
          <Link to="/">Home</Link>
        </InteriorLeftNavItem>
        <InteriorLeftNavItem>
          <Link to="/about">About</Link>
        </InteriorLeftNavItem>
      </InteriorLeftNav>
    );
  }
}

export default Navigation;
