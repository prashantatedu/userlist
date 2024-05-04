import React from "react";
import "./App.css";
import { UserApp } from "./movies/UserApp";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome Prashant to TypeScript</h1>
        <UserApp />
      </header>
    </div>
  );
}

export default App;
