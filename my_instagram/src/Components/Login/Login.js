import React ,{useState} from 'react'
import Instacon from '../Instacon/Instacon.js';
import {Link,useNavigate} from "react-router-dom"
import {auth} from "../../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"


function Login() {
  
  const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
      });
      const [errorMsg, setErrorMsg] = useState("");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
      const handleSubmission = () => {
        if (!values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        signInWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res)=>
          {
          setSubmitButtonDisabled(false);
          
           navigate("home");
          })
         
          .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
          });
      }


  return (
    <div className="body">
        <div className="Box">
            <h1>Login</h1>
        <div className="inputs"><Instacon className='realinputs' placeholder="Enter email adress"  onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } /></div>
        <div className="inputs"><Instacon className='realinputs' type="password" placeholder="Enter password"  onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } /></div>
        <b>{errorMsg}</b>
        <br></br>
        <br></br>
        <button className='registerbutton' onClick={handleSubmission} disabled={submitButtonDisabled}>Login</button>
        <h4>Don't have an account?</h4>
        <Link className='Loginlink' to="register">Register</Link>
        </div>
    </div>
  )
}

export default Login;