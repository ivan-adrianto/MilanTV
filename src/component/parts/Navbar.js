import React, { Component } from "react";
import logo1 from "./../../img/milan1.png";
import logo2 from "./../../img/milan2.png";
import "./../../css/navbar.css";
import profile from "./../../img/profilemockup.jpg";
import { Link } from 'react-router-dom'
import search from './../../img/search.svg'
import { withRouter } from 'react-router-dom'
import SignUp from "./../parts/SignUp";
import Logout from "./../parts/Logout";
import milanlogo from './../../img/milanLogo.jpg'



class Navbar extends Component {

  constructor() {
    super()
    this.state = {
      searched: '',
      menu: '',
      isLoggedIn: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  componentDidUpdate() {
    if (this.state.isLoggedIn === false && localStorage.getItem('token') !== null) {
      this.setState({
        isLoggedIn: true
      })
    } else if (this.state.isLoggedIn === true && localStorage.getItem('token') === null){
      this.setState({
        isLoggedIn: false
      })
    }
  } 

  handlerChange = (e) => {
    this.setState({
      searched: e.target.value
    }
    )
  }

  handleKeyPress(target, value) {
    const { history } = this.props;
    if (target.charCode == 13) {
      history.push(`/search/${this.state.searched}`);
    }
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    this.handleClick()
    this.props.history.push(`/search/${this.state.searched}`)
  }

  handleClick = () => {
    localStorage.setItem('search', this.state.searched)
  }

  profileClick = () => {
    let username = localStorage.getItem('username')
    this.props.history.push(`/profile/${username}`);
  }


  render() {
    return (
      <div> {this.state.isLoggedIn === false ?
        <div className='navigation' expand="md">
          <Link exact to='/' >
            <div className="logoHeader">
              <img src={milanlogo} alt="logo1" className="logo1" />
            </div>
            <h1>MilanTV</h1>
          </Link>

          <form onSubmit={(event) => this.handlerSubmit(event)} >
            <input onChange={(e) => this.handlerChange(e, 'value')} className="navbar-input" placeholder="Search" aria-label="Search"
            />
          </form>
          <Link to='/search' >

            <div className="searchIcon">

              <img onClick={this.handleClick} src={search} alt="search" />
            </div>
          </Link>
          <SignUp />
        </div> :


        <div className='navigation' expand="md">
          <Link exact to='/' >
            <div className="logoHeader">
              <img src={milanlogo} alt="logo1" className="logo1" />
            </div>
            <h1>MilanTV</h1>
          </Link>

          <form onSubmit={(event) => this.handlerSubmit(event)} >
            <input type='text' onChange={(e) => this.handlerChange(e, 'value')} className="navbar-input" placeholder="Search" aria-label="Search"
            />
          </form>
          <Link to='/search' >

            <div className="searchIcon">
              <img onClick={this.handleClick} src={search} alt="search" />
            </div>
          </Link>
          <Link >
            <img src={profile} alt="profil" className='profil' onClick={this.profileClick}></img>
          </Link>
          <Logout />

        </div>}

      </div>

    );
  }
}

export default withRouter(Navbar);