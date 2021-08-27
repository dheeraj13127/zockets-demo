import React, { useState } from 'react'
import './css/LandingHeader.css'
import {BsFillCircleFill} from 'react-icons/bs'
import header from '../../assets/header.png'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerEmail, setLoader } from '../../redux/actions'
import 'react-notifications/lib/notifications.css';
import {NotificationManager,NotificationContainer} from 'react-notifications';
function LandingHeader() {
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
            <div className="row landingHeaderRow mt-4 p-3">
            <div className="text-center">
                <BsFillCircleFill className="yellowIcon"/>
                </div>
                <div className="col-12 col-lg-6 col-md-6 mt-4">
                    <div className="text-center">
                    <BsFillCircleFill className="purpleIcon mt-2"/>
                    </div>
              
                    <h1 className="text-dark text-start landingHeaderHeader">
                    FACEBOOK ADS <br/>IN 30 SECONDS
                    </h1>
                    <p className="headerInfo text-start mt-3">Create stunning ad copy incredibly fast and <br/> skyrocket your businness</p>
                    <form onSubmit={submitForm}>
                    <div className="input-group mb-3 mt-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                  aria-describedby="addon-wrapping"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                />
                <span className="bg-light"><button className="btn earlyAccessBtn">Get Early Access</button></span>
              </div>
                    </form>
                </div>
                <div className="col-12 col-lg-6 col-md-6 mt-4">
                    <img src={header} alt="" className="img-fluid" />
                </div>
         
            </div>
            <NotificationContainer/>
        </div>
    )
}

export default LandingHeader
