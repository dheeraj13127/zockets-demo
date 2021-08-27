import React from "react";
import Footer from "../Footer/Footer";
import HearIt from "../HearIt/HearIt";
import LandingHeader from "../LandingHeader/LandingHeader";
import MailUs from "../MailUs/MailUs";
import Navbar from "../Navbar/Navbar";
import TailorServices from "../TailorServices/TailorServices";
import WhyUs from "../WhyUs/WhyUs";
import HashLoader from "react-spinners/HashLoader";
import { useSelector } from "react-redux";
import './css/Landing.css'
function Landing() {
  const auth = useSelector((state) => state.loader);
  return (
    <div>
      {!auth ? (
        <div className="container p-3">
          <Navbar />
          <LandingHeader />
          <TailorServices />
          <WhyUs />
          <HearIt />
          <MailUs />
          <Footer />
        </div>
      ) : (
        <div className="text-center hashLoader">
          <HashLoader size={80}/>
        </div>
      )}
    </div>
  );
}

export default Landing;
