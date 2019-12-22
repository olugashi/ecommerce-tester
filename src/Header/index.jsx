import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.css";
import "./Header.scss";

export default class Header1 extends Component {
  render() {
    let { title, toggleSidebar } = this.props;
    return (
      <header>
        <div className="header-inner">
          {
            <span className="navicon" onClick={toggleSidebar}>
              <Icon name="content" />
            </span>
          }
          <span className="title">{title}</span>
          <span className="spacer" />
        </div>
      </header>
    );
  }
}
