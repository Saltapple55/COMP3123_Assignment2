import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter, NavLink, Link } from 'react-router-dom';

import Login from './components/login';
import Signup from './components/Signup';
import EmployeeHome from './components/EmployeeHome';
import EmployeeView from './components/EmployeeView';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeCreate from './components/EmployeeCreate';
import NavigationBar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute';



function App() {
  const [message, setMessage] = useState("");
//      <Login/> <Signup/>


    return (
      <div className="App">

      <BrowserRouter>
      <NavigationBar/>

      <Routes>

        <Route path='/login' element= { <Login/> }/>
        <Route path='/signup' element= { <Signup/> }/>
        <Route path='/details/:userid' element= { <PrivateRoute Component={EmployeeView}/> }/>
        <Route path='/edit/:userid' element= { <PrivateRoute Component={EmployeeEdit}/> }/>
        <Route path='/create' element= { <PrivateRoute Component={EmployeeCreate}/> }/>

        <Route path='/employees' element= {<PrivateRoute Component={EmployeeHome}/> }/>
        {/* <Route path='/contact/:name' element= { <Contact/> }/>
        <Route path='/userlist' element= { <UserList /> } />
        <Route path='/user/:userid' element= { <UserDetails /> } /> */}

      </Routes>
      </BrowserRouter>
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
