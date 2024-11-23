 //type rfc, then tab. For class, rcc
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class Login extends Component {

    constructor(props){
        //...this.state - sometimes done this way
       super(props)
    this.state={
        //best practice, keep keys here
        firstname:'', 
        lastname:'',
        email:''
    }
        
    }

    handleClick(e){
        //have to point to control
        //e is the event
        e.preventDefault()

        alert(`Hello World: ${e.target.name} - ${e.target.value}`)

    }
    handleSubmit = (e)=>{
        //always write this line
        e.preventDefault()
        console.log(this.state);
    }
    handleInput=(e)=>{
        e.preventDefault()

        const {name, value}= e.target
        this.setState({
            ...this.state, //holder, operating new value - always put this line
            [name]: value
        })
        console.log(`${this.state}`)

       // this.fname=value

    }
  render() {
    return (
        //write onclick
        //every item has name and id-name is for server
        //this prints the value that first name recieved
        <Form>
        {/* email */}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
    )
  }
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
