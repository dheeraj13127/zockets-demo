import React from "react";
import "./css/TailorServices.css";
import { FcGoogle } from "react-icons/fc";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function TailorServices() {
  return (
    <div>
      <div className="row tailorServicesRow p-3">
        <h1 className="text-center tailerServicesHeader text-dark">
          Tailor-made Services
        </h1>
        <div className="col-12 col-lg-4 col-md-4  mt-4">
          <div className="servicesBox p-4">
            <div className="text-start">
              <img
                src={facebook}
                alt="facebook"
                className="tailorServicesIcons img-fluid"
              />
              <h6 className="text-dark text-start tailorServicesIconsHeader mt-4">
                Facebook Ads
              </h6>
              <p className="text-start tailorServicesIconsInfo">
                With custom audience targeting and personalized ad
                campaigns,your business is sure to aquire leads
              </p>
              <p className="text-start mt-5 tailorServicesExplore">
                Explore <HiOutlineArrowNarrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-4">
          <div className="servicesBox p-4">
            <div className="text-start">
              <FcGoogle className="tailorServicesIcon" />
              <h6 className="text-dark text-start tailorServicesIconsHeader mt-4">
                Google Ads
              </h6>
              <p className="text-start tailorServicesIconsInfo">
                With custom audience targeting and personalized ad
                campaigns,your business is sure to aquire leads
              </p>
              <p className="text-start mt-5 tailorServicesExplore">
                Explore <HiOutlineArrowNarrowRight />
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4 mt-4">
          <div className="servicesBox p-4">
            <div className="text-start">
              <img
                src={instagram}
                alt="facebook"
                className="tailorServicesIcons img-fluid"
              />
              <h6 className="text-dark text-start tailorServicesIconsHeader mt-4">
                Instagram Ads
              </h6>
              <p className="text-start tailorServicesIconsInfo">
                With custom audience targeting and personalized ad
                campaigns,your business is sure to aquire leads
              </p>
              <p className="text-start mt-5 tailorServicesExplore">
                Explore <HiOutlineArrowNarrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TailorServices;
