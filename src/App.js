import React from "react";
import "./App.css";
import HomeComponent from "./modules/home";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">Money Tracker</div>
        <HomeComponent />
      </div>
    </>
  );
}

export default App;
