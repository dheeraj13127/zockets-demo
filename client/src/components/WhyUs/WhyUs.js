import React from "react";
import "./css/WhyUs.css";
import campaigns from "../../assets/campaigns.png";
import enquiries from "../../assets/enquiries.png";
import expertise from "../../assets/expertise.png";
function WhyUs() {
  return (
    <div>
      <div className="row whyUsRow p-3">
        <h1 className="text-center whyUsHeader text-dark">Why Us</h1>
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="text-center">
            <img
              src={campaigns}
              alt="campaigns"
              className="img-fluid whyUsImages"
            />
          </div>
        </div>
        <div className="col-12 col-lg-5 col-md-5 mt-5">
          <h3 className="text-start text-dark whyUsHeadings">
            Localised Ad Campaigns
          </h3>
          <p className="text-start textdark whyUsInfo mt-5">
            With Zocket’s localised ad campaigns, you’re sure to drive customers
            to your physical store. Online business listings, geo-tagging, and
            ads are some of the many things we help businesses get started with.
            You can rest assured that you’ll leave a positive brand image on
            your customers as your business flourishes, making it easier for you
            to build long-lasting customer relationships locally.
          </p>
        </div>

        <div className="col-12 col-lg-5 col-md-5 whyUsSecondCol">
          <h3 className="text-start text-dark whyUsHeadings">
            Get More Calls and Enquiries
          </h3>
          <p className="text-start textdark whyUsInfo mt-5">
            When you use Zocket, you can expect calls pouring in with enquiries
            about your business. Our exceptional outreach strategies and
            business profile optimization techniques will catch the eye of
            prospects. With organic leads taken care of by Zoket, all you’d have
            to worry about is converting your leads to customers.
          </p>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="text-center">
            <img
              src={enquiries}
              alt="campaigns"
              className="img-fluid whyUsImages"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 col-md-6 mt-5">
          <div className="text-center">
            <img
              src={expertise}
              alt="campaigns"
              className="img-fluid whyUsImages"
            />
          </div>
        </div>
        <div className="col-12 col-lg-5 col-md-5 whyUsSecondCol">
          <h3 className="text-start text-dark whyUsHeadings">
            No Expertise Required
          </h3>
          <p className="text-start textdark whyUsInfo mt-5">
            Zocket is completely beginner friendly and doesn’t require any
            previous marketing expertise to use. Built with an aim to make
            marketing easier for small businesses, Zocket is powered by AI and
            will provide done-for-you content while you can take care of other
            important things in your business. With easy-to-follow guides, it
            doesn’t get better than this.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
