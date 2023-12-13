import React from "react";
import "./App.css";
import { api } from "./utils";
import type { User } from "./types";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    api<User[]>("https://jsonplaceholder.typicode.com/users").then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
