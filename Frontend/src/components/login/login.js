import React, {useState} from "react"
import "./login.css"
import {Link} from 'react-router-dom';
import logo from './logo.png'
import welcomeimg from './welcome.png'
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ updateUser}) => {


    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handlesubmit=(event)=>{
        event.Default();
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:5000/login", user)
        .then(res => {
            alert(res.data.message)
            updateUser(res.data.user)
            history.push("/")
        })
    }



    return (
         <div className="main-login">
         <div className="login-contain">
         <div className="left-side">
         <div className="img-class">  
         <img src={logo} alt="img-id" srcset="" />
         </div>
         <form onSubmit={handlesubmit}>    
         <label for="email">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" id = "emil1"/>
            <label for="pwd1">Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" id="pwd1"/>
            <button type="button" id="sub_butt" onClick={login}>Login</button>
            </form>
            
            
            <div className="footer">
                <h4>Don't have an Account ?</h4> 
                 <b><h3><Link className='link' to='/register'>Register Now</Link></h3></b> 

            </div>
            </div>    
       
       
        <div className="right-side">
        <div className="welcomNote"></div>
        <br></br>
        <h1>Welcome Back! &nbsp;&nbsp; </h1>
        
        <div className="welcomeImg">
         <img src={welcomeimg} id='wel-img-id' alt="" srcset="" /> 
        </div>    
        </div>
        </div>
        </div>
        

    );
}

export default Login;