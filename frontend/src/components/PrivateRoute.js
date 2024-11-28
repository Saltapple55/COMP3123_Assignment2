import { useNavigate } from "react-router-dom";
import {useState} from 'react'

const PrivateRoute = ({ Component }) => {
    const navigate = useNavigate()

 
const [token, setToken] = useState(localStorage.getItem('token'));
 
  return token ? <Component /> : navigate("/login");
};
export default PrivateRoute;