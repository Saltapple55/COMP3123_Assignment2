import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function EmployeeEdit() {
    var [user, setUser] = useState({
            
        first_name: "",
        last_name: "",
        email: "",
        position: "",
        salary: null,
        date_of_joining: null,
        department: "",

        
        

})
 //   var [user, setUser] = useState([]);




    const configuration = {
        method: "post",
        url: `https://comp-3123-assignment1-taupe.vercel.app/api/v1/emp/employees/`,
        header :'Content-Type: application/json',
        data:{
            
                "first_name": user.first_name,
                "last_name": user.last_name,
                "email": user.email,
                "position": user.position,
                "salary": user.salary,
                "date_of_joining": user.date_of_joining,
                "department": user.department
                
                

         }
         
      }

    //   useEffect(()=>{
    //     getEmployee()
    //     console.log("this is user "+userid)
    //     // console.log(user)
    
    // }, [])
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(u => ({
            ...u,
            [name]: value
        }));
        console.log(user)
    }

    // const handleSubmit =(e)=>{
    //     console.log(user)

    // }
    const handleSubmit =(e)=>{
        //always write this line
        e.preventDefault()


        // const datainref={
        //     username,
        //     password
        // }
        //console.log(datainref);
        console.log(configuration.data);

        axios(configuration)
        .then((response)=>{
          console.log("created")
          
        })
        .catch((error) => console.error("Error"+error));
      //value ref=... for references we've created
    }

  return (
    <Form className='Form-box'>
        <h3>Create Employee</h3>

    
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control 
        type="text" 
        name="first_name" 
        value={user.first_name}
        onChange={handleChange}/>
      </Form.Group>   
       <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control 
                type="text" 
                name="last_name" 
                value={user.last_name}
                onChange={handleChange}
                />
      </Form.Group>  
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control                
         type="email" 
                name="email" 
                value={user.email}
                onChange={handleChange}
                />
      </Form.Group>   
       <Form.Group className="mb-3">
        <Form.Label>Position</Form.Label>
        <Form.Control 
        type="text" 
        name="position" 
        value={user.position}
        onChange={handleChange}
        />
      </Form.Group>   
       <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control
        type="number" 
        name="salary" 
        value={user.salary}
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Control 
        type="text" 
        name="department" 
        value={user.department}
        onChange={handleChange}        />
       </Form.Group>  

         <Form.Group className="mb-3">
        <Form.Label>Date Joined</Form.Label>
        <Form.Control 
                type="date" 
                name="date of joining" 
                value={user.date_of_joining}
                onChange={handleChange}
        />
      </Form.Group>       

      <Button 
        variant="primary" 
        type="submit"
        onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
    
    </Form>
    
  )
}
