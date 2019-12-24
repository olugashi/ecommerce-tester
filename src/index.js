import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer/index";
import Header from "./Header/index";
import Items from "./Item/index";
import "./styles.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Items />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
