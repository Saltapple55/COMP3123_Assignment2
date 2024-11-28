import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function EmployeeEdit() {
    const { userid } = useParams()
    var [user, setUser] = useState({
            
        first_name: "",
        last_name: "",
        email: "",
        position: "",
        salary: null,
        date_of_joining: null,
        department: "",
        created_at: null,
        updated_at: null
        
        

})
 //   var [user, setUser] = useState([]);




    const configuration = {
        method: "put",
        url: `https://comp-3123-assignment1-taupe.vercel.app/api/v1/emp/employees/${userid}`,
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

      useEffect(()=>{
        getEmployee()
        console.log("this is user "+userid)
        // console.log(user)
    
    }, [])
    const getEmployee = async() => {
        try {
            const response = await axios.get(configuration.url)
            setUser(
                {first_name:response.data.first_name,
                last_name:response.data.last_name,
                email: response.data.email,
                position: response.data.position,
                salary: response.data.salary,
                date_of_joining: response.data.date_of_joining,
                department: response.data.department,
                created_at: response.data.created_at,
                updated_at: response.data.updated_at

                
            })
        } catch (error) {
            console.log(error)
        }
    }
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
          //const data = response.data
          console.log("updated")
          //console.log(data)
          // const {access, refresh} = data.access_token;
          // localStorage.setItem("accessToken", access);
          // localStorage.setItem("refreshToken", refresh);  

        })
        .catch((error) => console.error("Error"+error));
      //value ref=... for references we've created
    }

  return (
    <Form className='Form-box'>
        <h3>Edit Employee</h3>

    <Form.Group className="mb-3">
        <Form.Label>User id</Form.Label>
        <Form.Control placeholder={`${userid}`} disabled />
      </Form.Group>
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
       {/*} 
         <Form.Group className="mb-3">
        <Form.Label>Date Joined</Form.Label>
        <Form.Control 
                type="text" 
                name="date of joining" 
                value={user.date_of_joining}
                onChange={handleChange}
        />
      </Form.Group>       */}
       <Form.Group className="mb-3">
        <Form.Label>Date Created</Form.Label>
        <Form.Control placeholder={`${user.created_at}`} disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date Updated</Form.Label>
        <Form.Control placeholder={`${user.updated_at}`} disabled />
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
