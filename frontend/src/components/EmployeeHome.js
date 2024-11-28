import React, { useEffect,useState, } from 'react'
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useNavigate} from 'react-router-dom'




export default function EmployeeHome() {
    const [token, setToken] = useState('')
    const navigate = useNavigate()


    const [employees, setEmployees] = useState([]);
    const [searchInput, setSearchInput]=useState([])

    //  const history = useHistory();
    // function handleClick(path) {
    //     history.push(path);
    //   }
    const configuration = {
        method: "get",
        url: `https://comp-3123-assignment1-taupe.vercel.app/api/v1/emp/employees/`,
         
      }
      const configurationDel = {
        url: `https://comp-3123-assignment1-taupe.vercel.app/api/v1/emp/employees?eid=`
         
      }
      //

    useEffect(()=>{
    setToken(localStorage.getItem('token'))
    console.log(token)
         if(!token){
             console.log("no token")
        //     navigate("/login")
         }
        getEmployees()
        console.log("this is employees")
        console.log(employees)
        
             
    
    },  [token, navigate])
    
    const getEmployees = async ()=>{
        //always write this line



        axios(configuration)
        .then((response)=>{
          const data = response.data
          console.log(data)
          setEmployees( data)

        })
        .catch((error) => console.error(error));
      //value ref=... for references we've created

    }
    const searchEmployees = async (dep)=>{
        //always write this line

        axios.get(`${configuration.url}search/${dep}`)


        .then((response)=>{
          const data = response.data
          console.log(data)
          setEmployees( data)

        })
        .catch((error) => console.error(error));
      //value ref=... for references we've created

    }

    const deleteEmployee=async(id)=>{
        console.log(id)
        console.log(`${configurationDel.url}${id}`)
        axios.delete(`${configurationDel.url}${id}`)
        .then((res)=>{
        console.log(res)
        getEmployees()
    })
        .catch((error) => console.error(error));

    }

    
    

  return (
    <div>
        
       <h1>Employee Home</h1>
       
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Employee Department"
          aria-label="Employee Department"
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={(e)=>setSearchInput(e.target.value)}
        />
        <Button 
        variant="outline-secondary" 
        id="button-addon2"            
          onClick={(e) => searchEmployees(searchInput)}
        >
          Search
        </Button>
      </InputGroup>
       <Link to= {`/create`}>
            <Button variant="primary" 
            // onClick={() => handleClick("")}
            >Create</Button>
            </Link>
       <Table>
       <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Department</th>
          <th colspan="2" scope="colgroup">Actions</th>
        </tr>
      </thead>
      <tbody>
       {    employees.map((e, index)=>(
        
        <tr>
          <td>{index+1}</td>
          <td>{e.first_name}</td>
          <td>{e.last_name}</td>
          <td>{e.department}</td>
          <td> 
          <Container className='Button-row'>

          <Link to= {`/details/${e._id}`}>
            <Button variant="info" 
            // onClick={() => handleClick("")}
            >Details</Button>
            </Link>
            <Link to= {`/edit/${e._id}`}>
            <Button variant="success" 
            // onClick={() => handleClick("")}
            >Edit</Button>
            </Link>
            <Button variant="danger" 
             onClick={() => deleteEmployee(e._id)}
            >Delete</Button>
            </Container>
          </td>

        </tr>             
             
            ))
            }
              </tbody>

        </Table>

        </div>
  )
}
