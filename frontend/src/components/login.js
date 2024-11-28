 //type rfc, then tab. For class, rcc
import React, { useState, Text} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import {useNavigate} from 'react-router-dom'



export default function Login(){
    const navigate = useNavigate()
    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const configuration = {
        method: "post",
        url: "https://comp-3123-assignment1-taupe.vercel.app/api/v1/user/login",
         data: {
           username,
           password
         },
      }
  
      const handleSubmit =(e)=>{
          //always write this line
          e.preventDefault()
  
  
          const datainref={
              username,
              password
          }
          console.log(datainref);
          console.log(configuration.data);
  
          axios(configuration)
          .then((response)=>{
            
            const data = response.data
            console.log("logged in")
            console.log(data)
            localStorage.setItem('token', response.data.token);
            navigate('/employees')
            

          })
          .catch((error) =>{
            if(error.response)
            alert(error.response.data.message)
            
            console.error(error)});
        //value ref=... for references we've created
      }
  
    


  
    return (
        //write onclick
        //every item has name and id-name is for server
        //this prints the value that first name recieved

        <Form className='Form-box'>
        {/* email */}
        <h1>Login</h1>
        {/* <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
           type="email" 
           email="email" 

           placeholder="Enter email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}  
                    />
        </Form.Group> */}
            {/* email */}
            <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
          type="text" 
          name="username" 
          placeholder="Enter username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
    
        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

           />
        </Form.Group>
    
        {/* submit button */}
        <Button 
        variant="primary" 
        type="submit"
        onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Form>
      
    )
  }

/*<div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
        First Name: <input type='text' name='firstname' value={this.state.firstname}onChange={this.handleInput} placeholder='Place your name here'></input>
        Last Name: <input type='text' name='lastname' value={this.state.lastname}onChange={this.handleInput} placeholder='Place your last bane'></input>
        Country:<select name = 'country' onChange={this.handleInput}>
            {this.countries.map((cnm)=>{
                <option key={cnm}>{cnm}</option>
            })}
        </select>
        City: <select name='city' onChange={this.handleInput}>
            <option value='TOR'>Toronto</option>
            <option value='NYC'>New York</option>
            <option value='MKR'>Markham</option>

        </select>
        <input type='submit' value='login'/>
        <button value="TEST" name='btnSubmit'onClick={this.handleClick}>Submit</button>

        </form>
        <p>{this.state.firstname}</p>

        <p>{JSON.stringify(this.state)}</p>

        </div> */
