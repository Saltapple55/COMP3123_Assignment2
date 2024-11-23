import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Login from './components/login';
import Signup from './components/Signup';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://comp-3123-assignment2.vercel.app/message")
      .then((res) => {
        console.log("Response headers", res.headers)
        console.log("Response status:", res.status);
        return(res.json())})
        //return res.text()})
      .then((data) => {
        console.log("data is"+data)
        console.log(data.message)
        setMessage(data.message)
        console.log(message)
      })
      .catch((err) => console.error(err));
    }, []);

    return (
      <div className="App">
      <h1>{message}</h1>
      <Signup/>
    </div>

  );
}

export default App;


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
