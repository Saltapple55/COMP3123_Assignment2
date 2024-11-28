import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';


export default function EmployeeView() {
    const { userid } = useParams()
    var [user, setUser] = useState([])



    const configuration = {
        method: "get",
        url: `https://comp-3123-assignment1-taupe.vercel.app/api/v1/emp/employees/${userid}`,
         
      }

      useEffect(()=>{
        getEmployee()
        console.log("this is user "+userid)
        // console.log(user)
    
    }, [])
    const getEmployee = async() => {
        try {
            const response = await axios(configuration)
            setUser(response.data)
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <Form className='Form-box'>
        <h3>EmployeeView</h3>

    <Form.Group className="mb-3">
        <Form.Label>User id</Form.Label>
        <Form.Control placeholder={`${user._id}`} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>First name</Form.Label>
        <Form.Control placeholder={`${user.first_name}`} disabled />
      </Form.Group>   
       <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control placeholder={`${user.last_name}`} disabled />
      </Form.Group>  
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder={`${user.email}`}/>
      </Form.Group> 
       <Form.Group className="mb-3">
        <Form.Label>Position</Form.Label>
        <Form.Control placeholder={`${user.position}`} disabled />
      </Form.Group>   
       <Form.Group className="mb-3">
        <Form.Label>Salary</Form.Label>
        <Form.Control placeholder={`${user.salary}`} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Department</Form.Label>
        <Form.Control placeholder={`${user.department}`} disabled />
      </Form.Group>    
         <Form.Group className="mb-3">
        <Form.Label>Date Joined</Form.Label>
        <Form.Control placeholder={`${user.date_of_joining}`} disabled />
      </Form.Group>      
       <Form.Group className="mb-3">
        <Form.Label>Date Created</Form.Label>
        <Form.Control placeholder={`${user.created_at}`} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Updated</Form.Label>
        <Form.Control placeholder={`${user.updated_at}`} disabled />
      </Form.Group>


    
    </Form>
    
  )
}
