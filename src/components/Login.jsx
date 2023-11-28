import React,{useState} from "react";
import "./Login.css";
import user_icon from "./Assets/person.png";
import password_icon from "./Assets/password.png";
import email_icon from "./Assets/email.png";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import NavBar1 from "./NavBar1";

const Login = () => {
  const Isvalid = () => {
    let isproceed = true;

    let errormessage='Please Enter The Value In ';
    
    if(name===null||name==='')
    {
      isproceed=false;
      errormessage+="Name"
    }
    if(email===null||email==='')
    {
      isproceed=false;
      if(errormessage==="Please Enter The Value In Name"){
      errormessage+=" And Email";
      }else{
        errormessage+="Email"
      }
    }
    if(password===null||password==='')
    {
      isproceed=false;
      if(errormessage==="Please Enter The Value In Name And Email"){
      errormessage+=" And Password ";
      }
      if(errormessage==="Please Enter The Value In Name"){
      errormessage+=" And Password ";
      }
      if(errormessage==="Please Enter The Value In Email"){
      errormessage+=" And Password ";
      }
      if(errormessage==="Please Enter The Value In ")
      {
        errormessage+="Password ";
      }
    }
    if(!isproceed)
    {
      alert(errormessage)
    }
    else{
      if(/^[a-zA-z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

      }else{
        isproceed=false;
        alert("Please Enter Valid Email");
      }
    }
    return isproceed;
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (Isvalid()) {

      axios
        .post("http://localhost:1010/users",{
          name,
          email,
          password,
        })
        .then((res) => {
          alert("Registered Successfully");
          navigate("/");
        })
        .catch((err) => {
          alert("Failed: " + err);
        });
    }
  };
  return (
    <div className="imageclass">
      <div><NavBar1/></div>
      <form className="container" onSubmit={handlesubmit}>
        <div className="header">
          <div className="text">SIGN UP</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            ></input>
          </div>

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
        </div>
        <div className="forgot-password">
          Forgot Password?<Link to="/Forgot">Click Here</Link>
        </div>
        <div className="submit-container">
          <button className="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;