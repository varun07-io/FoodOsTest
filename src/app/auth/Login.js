import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import { Redirect } from "react-router-dom";

import { signin,authenticate,isAutheticated,isProfileCompleted,getUserIdFromToken} from '../apiHandler/api'


const Login = () => {


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const { user } = isAutheticated();

  const [didRedirect, setdidRedirect] = useState(false);

  const [wrongPassword, setwrongPassword] = useState(false);

  const onBranchSignin = (e) => {
      e.preventDefault();
      signin({email,password})
      .then((res) => {
        console.log("OII",res)
        authenticate(res,() => {
          setdidRedirect(true)
        });
      })
      .catch((err) => {
        console.log(err);
      }); 
  }



  const performRedirect = () => {
    if (didRedirect) {
    console.log("isProfileCompleted(): ",isProfileCompleted(getUserIdFromToken()));

      if (user && user.role === "restaurant") {
        if(isProfileCompleted(getUserIdFromToken()) === 7)
        {
          return <Redirect to="/profile" />;
        }
        if(isProfileCompleted(getUserIdFromToken()) === 1){
          return <Redirect to="/" />;
        }
      } else {
        return <Redirect to="/admin" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/login" />;
    }
  };



    return (
        <div>
          {performRedirect()}
        <div className="d-flex align-items-center auth px-0" style={{marginTop:100}}>
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Restaurant Admin Panel</h4>
                <h6 className="font-weight-light">Enter the password to signin</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" onChange={(e) => setemail(e.target.value)} placeholder="Username" size="lg" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" onChange={(e) => setpassword(e.target.value)} placeholder="Password" size="lg" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                    <button onClick={onBranchSignin} className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">SIGN IN</button>
                  </div>
                  {/* <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input"/>
                        <i className="input-helper"></i>
                        Keep me signed in
                      </label>
                    </div>
                    <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="mdi mdi-facebook mr-2"></i>Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/user-pages/register" className="text-primary">Create</Link>
                  </div> */}
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
}

export default Login
