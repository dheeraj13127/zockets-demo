import React,{useState} from "react";
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from "../../assets/logo.png";
import "./css/Navbar.css";
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import 'react-notifications/lib/notifications.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
import { registerEmail, setLoader } from "../../redux/actions";
import { FaTelegramPlane } from "react-icons/fa";
function Navbar() {

  const dispatch=useDispatch()
    const history=useHistory()
    const [email,setEmail]=useState("")
    const submitForm=(e)=>{
            e.preventDefault()
            dispatch(registerEmail({email:email},history))
            NotificationManager.success("Verification code sent to your email", '', 1500)
            setTimeout(()=>{
                dispatch(setLoader())
            },2000)

    }
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a
            className="navbar-brand text-dark navHeaderText d-flex align-items-center"
            href="/"
          >
            <img src={logo} alt="logo" className="navLogo" />
            &nbsp;Zocket
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
         <GiHamburgerMenu className="text-dark"/>
          </button>
          <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
            <ul className="navbar-nav p-2 ml-auto nav">
              <li className="nav-item">
                <a className="text-dark nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="/">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="text-dark nav-link" href="/">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
              <button className="navBtn btn dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> 
                Get Early Access 
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <div className="dropdown-item">
              <form onSubmit={submitForm}>
                    <div className="input-group mb-3 mt-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-describedby="addon-wrapping"
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                  required
                />
                
              </div>
              <div className="bg-light text-center"><button className="btn earlyAccessBtns"><FaTelegramPlane/></button></div>
                    </form>
              </div>
            </li>
           
          </ul>
              </li>
              
            </ul>
           
          </div>
        </div>
      </nav>
      <NotificationContainer/>
    </div>
  );
}

export default Navbar;
