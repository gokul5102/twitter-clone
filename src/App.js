import React from "react";
import "./App.css";
import Feed from "./Feed";
import SideBar from "./SideBar";
import Widget from "./Widget";
const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Feed />
      <Widget />
    </div>
  );
};

export default App;
