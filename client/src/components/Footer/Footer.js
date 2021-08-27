import React,{useState} from "react";
import "./css/Footer.css";
import logo from "../../assets/logo.png";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter,FaTelegramPlane } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import {useHistory} from 'react-router-dom' 
import {useDispatch} from 'react-redux'
import 'react-notifications/lib/notifications.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
import { registerEmail, setLoader } from "../../redux/actions";
function Footer() {
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
    <div>
      <div className="row footerRow p-3">
        <div className="col-6 col-lg-4 col-md-4">
          <a
            className="navbar-brand text-dark navHeaderText d-flex align-items-center"
            href="/"
          >
            <img src={logo} alt="logo" className="navLogo" />
            &nbsp;Zocket
          </a>
          <p className="copyrightText mt-4">Copyright &copy; 2021 Zocket</p>
          <p className="copyrightText">All rights reserved</p>
          <div className="footerIcons mt-4">
            <RiInstagramLine className="footerIcon" />
            <FaTwitter className="footerIcon"/>
            <AiFillYoutube className="footerIcon"/>
          </div>
        </div>
        <div className="col-6 mt-3 col-lg-2 col-md-2">
            <h6 className="text-dark footerCompanyHeader">Company</h6>
            <p className="mt-3 footerCompanyText">About us</p>
            <p className="mt-3 footerCompanyText">Blog</p>
            <p className="mt-3 footerCompanyText">Contact us</p>
            <p className="mt-3 footerCompanyText">Pricing</p>
            <p className="mt-3 footerCompanyText">Testinomials</p>
        </div>
        <div className="col-6 mt-3 col-lg-2 col-md-2">
            <h6 className="text-dark footerCompanyHeader">Support</h6>
            <p className="mt-3 footerCompanyText">Help centre</p>
            <p className="mt-3 footerCompanyText">terms of service</p>
            <p className="mt-3 footerCompanyText">Legal</p>
            <p className="mt-3 footerCompanyText">privacy policy</p>
            <p className="mt-3 footerCompanyText">Status</p>
        </div>
        <div className="col-6 mt-3 col-lg-3 col-md-3">
            <h6 className=" footerAccessHeader">Get Early Access</h6>
            <form className="mt-2" onSubmit={submitForm}>
                    <div className="input-group mb-3 mt-4">
                <input
                  type="email"
                  className="form-control inputEmail"
                  placeholder="Your email address"
                  aria-describedby="addon-wrapping"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
                <span className="bg-light"><button className="btn earlyAccessBtns1"><FaTelegramPlane/></button></span>
              </div>
                    </form>
        </div>
      </div>
      <NotificationContainer/>
    </div>
  );
}

export default Footer;
