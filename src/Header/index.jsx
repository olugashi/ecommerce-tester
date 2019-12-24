import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import ImageCarousel from "./CarouselImages";
import Header from "./Header";
import "semantic-ui-css/semantic.css";
import "./Header.scss";

export default class Header1 extends Component {
  render() {
    return (
      <Segment>
        <Header />
        <ImageCarousel />
      </Segment>
    );
  }
}
