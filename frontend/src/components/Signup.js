import React from 'react'
import { useRef } from 'react' //variable
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
//need to create raw code with useref
export default function Signup() {
    var emailRef=useRef('')
    var passwordRef=useRef('')
    var usernameRef=useRef('')
    const configuration = {
      method: "post",
      url: "https://localhost:3001/register",
      data: {
        usernameRef,
        emailRef,
        passwordRef
      },
    };

    const handleSubmit =(e)=>{
        //always write this line
        e.preventDefault()

        const data={
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        }
        console.log(data);
        //value ref=... for references we've created
    }

  return (
    <Form>
    {/* email */}
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
       type="email" 
       placeholder="Enter email"
       ref={emailRef}
       />
    </Form.Group>
        {/* email */}
        <Form.Group controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
      <Form.Control 
      type="text" 
      placeholder="Enter username" 
      ref={usernameRef}
      />
    </Form.Group>

    {/* password */}
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control 
      type="password"
      placeholder="Enter Password"
      ref={passwordRef}
       />
    </Form.Group>

    {/* submit button */}
    <Button 
    variant="primary" 
    type="submit"
    onClick={(e) => handleSubmit(e)}
    >
      Sign Up
    </Button>
  </Form>
    
  )
}

/*
<div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
        First Name: <input type='text' ref={firstnameRef} placeholder='Place your name here'></input>
        Last Name: <input type='text' ref={lastnameRef} placeholder='Place your last bane'></input>
        <input type='submit' value='sign up'/>
        </form>
        </div>*/