import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Login from './components/login';
import Signup from './components/Signup';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
    return (
      <div className="App">
      <h1>{message}</h1>
      <Signup/>
    </div>

  );
}
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div> */
export default App;
