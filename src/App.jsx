import React from "react";
import "./App.css";
import Weather from "./components/Weather";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <h1>It is pants or shorts weather?</h1>
      </div>
      <Weather />
      <div className="idea">
        App Idea by: Casey Dulson{" "}
        <a
          href="https://twitter.com/Casey_LeighD/status/1380176301261254658"
          target="_blank"
          rel="noopener noreferrer"
        >
          @Casey_LeighD
        </a>
        <br></br>"I wish there was an app which could tell you if it is pants or
        shorts weather."
      </div>
    </div>
  );
};

export default App;
