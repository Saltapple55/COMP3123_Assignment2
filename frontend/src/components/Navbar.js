import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate, NavLink} from 'react-router-dom'





export default function NavigationBar() {
    const [token, setToken] = useState('')
    const navigate = useNavigate()


    const logout=()=>{
        setToken('')
        localStorage.removeItem('token')
        console.log("logging out")
        navigate("/login")


    }
    useEffect(()=>{
        setToken(localStorage.getItem('token'))
    }

)
    
    if(!token){
    return (
     <Navbar  expand="lg" className="bg-body-tertiary">
      <Container>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink}  to="/signup">Sign Up</Nav.Link>

        </Nav>
        </Container>
        </Navbar>


        )

    }
      return (
    <Navbar expand="lg" className="bg-body-tertiary"  data-bs-theme="dark">
    <Container>
    <Nav className="me-auto">
    <Button
     type="submit"
    onClick={logout}
    >Logout</Button>


      <Nav.Link as={NavLink} to="/employees">Employees List </Nav.Link>
      </Nav>
      </Container>
      </Navbar>  )
}
