import React, { useState } from 'react';
import milanLogo from "./../../img/milanLogo.jpg"
import "./../../css/signUp.css";
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { useHistory } from "react-router-dom";


const SignUp = (props) => {
  let history = useHistory();
  const {
    buttonLabel,
    className
  } = props;

  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalSignIn, setModalSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const checker = () => {
    localStorage.getItem('token') === null ? setIsLoggedIn(false) : setIsLoggedIn(true)
  }

  const toggleSignUp = () => setModalSignUp(!modalSignUp);
  const toggleSignIn = () => {
    setModalSignIn(!modalSignIn);
    setModalSignUp(false)
  }

  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmitSignUp = (e) => {
    e.preventDefault()
    localStorage.setItem('token', 'yescool')
    localStorage.setItem('username', userName)
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    history.push('/')
  }

  const handleSubmitSignIn = (e) => {
    e.preventDefault()
    localStorage.setItem('token', 'yescool')
    localStorage.setItem('username', userName)
    localStorage.setItem('fullName', fullName)
    localStorage.setItem('email', email)
    history.push('/')
    checker()
  }

  return (
    <div>
      <div className="SignUpModal">
        <div className='navigation'>
          <Button className="signUp" color="danger" onClick={toggleSignUp}>{buttonLabel}Sign Up</Button>
        </div>

        <Modal isOpen={modalSignUp} toggle={toggleSignUp} className={className}>
          <ModalHeader toggle={toggleSignUp}>
            <div className="ModalHeader">
              <div className="logoMilanSign">
                <h4><img src={milanLogo} alt="milanLogo" className="milanLogo" />
              Milan TV</h4>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            <h4 className="SignTitle">Register Your Account</h4>

            <form onSubmit={handleSubmitSignUp}>

              <div className="form-group">
                <label id="SignUp" >Full Name</label>
                <br />
                <input id="InputSignUp" type="text" className="input-form btn-block" placeholder="Enter full name" onChange={(e) => setFullName(e.target.value)} />
              </div>
              <div className="form-group">
                <label id="SignUp" >User Name</label>
                <br />
                <input id="InputSignUp" type="text" className="input-form btn-block" placeholder="Enter user name" onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div className="form-group">
                <label id="SignUp" >Email</label>
                <br />
                <input id="InputSignUp" type="email" className="input-form btn-block" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label id="SignUp" >Password</label>
                <br />
                <input id="InputSignUp" type="password" className="input-form btn-block" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button id="submitButton" type="submit" className="btn btn-primary btn-block">Sign Up</button>
              <p className="Login">
                Already have an account? <Button color="primary" onClick={toggleSignIn}>{buttonLabel}Sign In</Button>
                {/* <a onClick={toggleSignUp}>Log In</a> */}
              </p>
            </form>

          </ModalBody>

        </Modal>
      </div>




      <div className="SignInModal">

        <Modal isOpen={modalSignIn} toggle={toggleSignIn} className='signInModal'>
          <ModalHeader toggle={toggleSignIn}>
            <div className="ModalSignInHeader d-flex">
              <img src={milanLogo} alt="milanLogo" className="milanLogo" />
              <h4>Milan TV</h4>
            </div>
          </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmitSignIn}>
              <div className="form-group">
                <label id="SignUp" >Email</label>
                <br />
                <input id="InputSignUp" type="email" className="input-form btn-block" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-group">
                <label id="SignUp" >Password</label>
                <br />
                <input id="InputSignUp" type="password" className="input-form btn-block" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button id="submitButton" type="submit" className="btn btn-primary btn-block" onClick={toggleSignIn}>Sign In</button>

            </form>

          </ModalBody>

        </Modal>
      </div>

    </div>

    // </div>
  );

}

export default SignUp;
