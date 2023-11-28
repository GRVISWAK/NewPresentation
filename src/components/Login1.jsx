import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import "./Login.css";
import password_icon from "./Assets/password.png";
import email_icon from "./Assets/email.png";
import { Link, useNavigate } from "react-router-dom";
import NavBar1 from "./NavBar1";
import { UserContext } from "./UserContext";

const Login1 = () => {
  const [namefield, setnamefield] = useState("");
  let isFill = false;
  let validpassword = true;
  const emailref = useRef();
  const passwordref = useRef();
  let password = "";
  let isvaliduser = true;

  const usenavigate = useNavigate();
  const [user, setuser] = React.useContext(UserContext);
;
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      if (emailref.current.value) {
        isFill = true;
      } else {
        isFill = false;
      }

      if (isFill) {
        axios
          .get(`http://localhost:1010/users?email=${emailref.current.value}`)
          .then((resp) => {
            if (resp.data[0]) {
              isvaliduser = true;
              password = resp.data[0].password;
            if (passwordref.current.value === password) {
              setnamefield(resp.data[0].name);
              setuser(resp.data[0].name);
              usenavigate("/");
            } else {
              alert("Enter Valid Credentials");
            }
          }
          else{
            isvaliduser=false;
          }
          }).catch()
      } 
    }
    else{
      console.log("Not Valid")
    }
  };
  const validate = () => {
    let isproceed = true;

    let errormessage = "Please Enter The Value In ";
    if (emailref === null || emailref === "") {
      isproceed = false;
      errormessage += "Email";
    }
    if (passwordref === null || passwordref === "") {
      isproceed = false;
      if (errormessage === "Please Enter The Value In Email") {
        errormessage += " And Password";
      } else {
        errormessage += "Password";
      }
    }
    if (!isproceed) {
      alert(errormessage);
    }
    return isproceed;
  };
  return (
    <div className="imageclass">
      <div>
        <NavBar1 />
      </div>
      <form className="container" onSubmit={ProceedLogin}>
        <div className="header">
          <div className="text">LOGIN</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input ref={emailref} type="email" placeholder="Email ID" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              ref={passwordref}
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" type="submit">Login</button>
          <div>
            <Link to="/Sign up">Do Not Have An Account?Click Here</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login1;