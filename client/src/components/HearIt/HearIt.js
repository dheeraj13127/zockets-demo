import React from "react";
import "./css/HearIt.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import {BsFillCircleFill} from 'react-icons/bs'
function HearIt() {
  return (
    <div>
      <div className="row p-3 hearItRow">
        <h1 className="text-center hearItHeader text-dark">
          Hear It From Them
        </h1>
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="hearItBox p-4">
            <h6 className="text-center text-dark hearItReviewHeader">
              Incredibly Amazing!
            </h6>
            <p className="text-center mt-3 hearItReviewInfo">
              Zocket made a huge difference in just a few weeks of using it.
              Their ad copy helped take our business to the next level and the
              support they offered during our association was top-notch. If
              you’re looking to elevate your brand or business, Zocket is your
              go-to site!
            </p>
          </div>
          <div className="text-center mt-4 d-flex align-items-center justify-content-center">
            <img
              src={avatar1}
              alt="avatar"
              className="hearItAvatar"
            />
            <span>
              <span className="hearItAvatarBox">
                <span className="heartItAvatarHeader">Ella May</span>
                <span className="hearItAvatarInfo">Digital Marketer</span>
              </span>
            </span>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="hearItBox p-4">
            <h6 className="text-center text-dark hearItReviewHeader">
              Remarkable Growth
            </h6>
            <p className="text-center mt-3 hearItReviewInfo">
              Since the day we started using Zocket, we’ve seen incredible
              growth in inbound enquiries and leads. Zocket has every feature
              you can think of when it comes to growing your business. I highly
              recommend Zocket to anyone who’s wanting to up their game.
            </p>
          </div>
          <div className="text-center mt-4 d-flex align-items-center justify-content-center">
            <img
              src={avatar2}
              alt="avatar"
              className=" hearItAvatar"
            />
            <span>
              <span className="hearItAvatarBox">
                <span className="heartItAvatarHeader">Julie Murphy</span>
                <span className="hearItAvatarInfo">Sales Representative</span>
              </span>
            </span>
          </div>
        </div>
        <div className="mt-5">
            <div className="text-center dotBox d-flex align-items-center justify-content-center">
                <BsFillCircleFill className="dotIcon"/>
                <BsFillCircleFill className="dotIcon1"/>
                <BsFillCircleFill className="dotIcon1"/>
            </div>
        </div>
      </div>

    </div>
  );
}

export default HearIt;
