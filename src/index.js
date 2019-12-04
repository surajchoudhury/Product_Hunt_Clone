import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Main from "./components/main";
import "./stylesheets/style.scss";

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("body"));
