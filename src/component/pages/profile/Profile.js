import React, { Component } from "react";
import fotoprofil from "./../../../img/profilemockup.jpg";
import Navbar from './../../parts/Navbar'
import './../../../css/profile.css'
import ReviewProfile from './ReviewProfile'
import Watchlist from "./Watchlist";
import SignUp from "./../../parts/SignUp";
import axios from 'axios'



class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      submenu: 'reviews',
      reviews: [],
      isLoading: false,
      isUpdate: 'false',
      isLoggedIn: false,
      username: '',
      fullname: '',
      email: '',
      password: '',
      saved: ''
    }
  }

  componentDidMount() {

    localStorage.getItem('token') !== null ?
      this.setState({
        isLoggedIn: true
      }) : this.setState({
        isLoggedIn: false
      })
    this.setState({
      isLoading: true
    })
    // const id = this.props.match.params.id;
    fetch(
      `https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-persona`
    )
      .then((result) => result.json())
      .then((response) =>
        this.setState({
          data: response[4],
        })
      );



    fetch(
      `https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review`
    )
      .then((result) => result.json())
      .then((response) =>
        this.setState({
          reviews: response,
          isLoading: false,
        })
      );

  }

  componentDidUpdate() {
    if (this.state.isUpdate == 'true') {
      this.setState({
        isLoading: true
      })
      fetch(
        `https://5fa8da99c9b4e90016e69b15.mockapi.io/userprofile/user-review`
      )
        .then((result) => result.json())
        .then((response) =>
          this.setState({
            reviews: response,
            isLoading: false,
          })
        );
    }
  }

  handleInput(e) {
    this.setState({
      submenu: e.target.value
    });

  }

  fullnameChange = (e) => {
    console.log(e.target.value)
    this.setState({
      fullname: e.target.value
    })
  }

  usernameChange = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
  }

  emailChange = (e) => {
    console.log(e.target.value)
    this.setState({
      email: e.target.value
    })
  }

  passwordChange = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value
    })
  }


  changeProfile = (e) => {
    e.preventDefault()
    this.setState({
      isLoading: true
    })
    this.state.fullname != '' ? localStorage.setItem('fullName', this.state.fullname) : localStorage.setItem('apaini', 'apa')
    this.state.username != '' ? localStorage.setItem('username', this.state.username) : localStorage.setItem('apaini', 'apa')
    this.state.email != '' ? localStorage.setItem('email', this.state.email) : localStorage.setItem('apaini', 'apa')
    this.state.password != '' ? localStorage.setItem('password', this.state.password) : localStorage.setItem('apaini', 'apa')
    
    this.setState({
      isLoading: false,
      saved: 'active'
    })
      // const bodyData = {
      //   fullName: this.state.fullname,
      //   userName: this.state.username,
      //   email: this.state.email,
      //   password: this.state.password
      // }

      // axios(`http://ec2-54-169-37-102.ap-southeast-1.compute.amazonaws.com/user?id=${localStorage.getItem('id')}`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${localStorage.getItem('token')}`
      //   }, data: JSON.stringify(bodyData)
      // })
      // .then((res) => {
      //   localStorage.setItem('fullName', this.state.fullname)
      //   localStorage.setItem('username', this.state.username)
      //   localStorage.setItem('email', this.state.email)
      //   localStorage.setItem('password', this.state.password)
      //   console.log(res)
      //   this.setState({
      //     isLoading: false,
      //     saved: 'active'
      //   })
      // })



  }

  render() {
    return (
      <div>
        {!this.state.isLoggedIn &&
          <div>
            <h1 className='error-login'>Log In/Sign Up to View This Page</h1>
            <SignUp />

          </div>}

        {this.state.isLoggedIn &&
          <div>
            <Navbar />
            {this.state.isLoading && <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>}
            {!this.state.isLoading &&
              <div>
                <div className='profilePage'>
                  <div className="container">
                    <div className="row">
                      <div className="leftSide col-12 col-sm-12 col-lg-3" id='leftside'>
                        <div id="fotoprofil">
                          <img src={fotoprofil} alt="profil" /><br />
                        </div>
                        <label for="fullname">Fullname</label><br />
                        <input type="text" id='fullname' placeholder='your fullname' defaultValue={localStorage.getItem('fullName')} onChange={this.fullnameChange} /><br />
                        <label for="username">Username</label><br />
                        <input type="text" id='username' placeholder='your username' defaultValue={localStorage.getItem('username')} onChange={this.usernameChange} /><br />
                        <label for="email">Email</label><br />
                        <input type="text" id='email' placeholder='your email' defaultValue={localStorage.getItem('email')} onChange={this.emailChange} /><br />
                        <label for="password">Password</label><br />
                        <input type="password" id='password' placeholder='your password' defaultValue={this.state.data.password} onChange={this.passwordChange} /><br />
                        <button type='submit' className={`saveprofile ${this.state.saved === 'active' ? 'saveprofile-active' : ''}`} onClick={(e) => this.changeProfile(e, 'value')}>{this.state.saved === 'active' ? 'Saved!' : 'Save'}</button>
                      </div>
                      <div className="col-sm-12 col-lg-9">
                        <div className="profile-menu">
                          <button className={`wishlists btn ${this.state.submenu === 'reviews' ? 'reviews-active' : ''}`} value='reviews' onClick={(e) => this.handleInput(e, 'value')}>Reviews &amp; Rating</button>
                          <button className={`wishlists btn ${this.state.submenu !== 'reviews' ? 'reviews-active' : ''}`} value='watchlists' onClick={(e) => this.handleInput(e, 'value')}> Watchlist </button>
                          <div className="rightside">
                            {this.state.submenu == 'watchlists' ? <Watchlist /> :
                              <ReviewProfile />}

                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            }
          </div>}

      </div>



    );
  }
}

export default Profile;
