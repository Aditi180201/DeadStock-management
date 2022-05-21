import React, { useState } from "react"
import "./register.css"
import {Link} from 'react-router-dom';
import logo from './logo1.png'
import welcomeimg from './Picture1.png'
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handlesubmit=(e)=>{
        e.preventDefault();
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:5000/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("Invlid Input")
        }
        
    }

    return (
        <div className="main-register">
         <div className="register-contain">
         <div className="left-side">
         <div className="img-class">
         <img src={logo} alt="img-id" srcset="" />

         </div>
         <form onSubmit={handlesubmit}>    
         <label for="name">Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your Name" id = "fname"/>
            <label for="email">Email</label>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email" id = "email1"/>
            <label for="pwd1">Password</label>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" id="pwd1"/>
            <label for="pwd2">Confirm Password</label>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}  placeholder="Enter your Password" id="pwd2"/>
            <button type="button" id="sub_butt" onClick={register}>Register</button>
            </form>
            
            
             {/* <div className="button"  onClick={() => history.push("/login")}>Login</div> */}
             <div className="footer">
                <h4>Already have an Account ?</h4> 
                <b><h3><Link className='link' to='/login'>Sign In</Link></h3></b>
            </div>
            </div>    
       
       
        <div className="right-side">
        <div className="welcomNote"></div>
        <br></br>
        <h1>Welcome! &nbsp;&nbsp; </h1>
        
        <div className="welcomeImg">
         <img src={welcomeimg} id='wel-img-id' alt="" srcset="" /> 
        </div>    
        </div>
        </div>
        </div>
        

    );
}
            
           
        


export default Register;