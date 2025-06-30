import React from "react";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-page">
      <div className="hero">
        <h1>Pricing</h1>
        <p>Choose the plan that fits your crypto journey.</p>
      </div>
      <div className="pricing-table">
        <div className="plan">
          <h2>Free</h2>
          <p>$0/month</p>
          <ul>
            <li>Live Prices</li>
            <li>Basic Charts</li>
            <li>Currency Converter</li>
          </ul>
        </div>
        <div className="plan">
          <h2>Pro</h2>
          <p>$9.99/month</p>
          <ul>
            <li>All Free Features</li>
            <li>Advanced Analytics</li>
            <li>Priority Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
