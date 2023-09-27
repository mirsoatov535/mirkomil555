import React from 'react'
import {useState} from 'react';
import Instacon from "../Instacon/Instacon.js";
import {Link,useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"
import {auth} from "../../firebase"
import "./Register.css"


function Register() {
  const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
      const handleSubmission = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>
          {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await  updateProfile(user, {
            displayName: values.name,
          });
           navigate("/");
          })
         
          .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
          });
      }
  return (
    <div className='body'>
        <div className='Box'>
            <h1>Signup</h1>
            <div className="inputs"><Instacon className='realinputs'   placeholder="Enter your name" onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }/></div>
        <div className="inputs"><Instacon className='realinputs'   placeholder="Enter email adress" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }/></div>
        <div className="inputs"><Instacon className='realinputs' type="password" placeholder="Enter password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }/></div>
          <h5>{errorMsg}</h5>
        <button className='registerbutton' onClick={handleSubmission} disabled={submitButtonDisabled}>Register</button>
        <h4>Do you have an account?</h4>
        <Link className='Loginlink' to="/">Login</Link>
        </div>
    </div>
  )

}

export default Register;