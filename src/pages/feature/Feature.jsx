import React from "react";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature-page">
      <div className="hero">
        <h1>Features</h1>
        <p>
          Discover the powerful features of BlockchainBuzz that make tracking
          and analyzing cryptocurrencies easy and insightful.
        </p>
      </div>
      <div className="feature-list">
        <ul>
          <li>Live Cryptocurrency Prices</li>
          <li>Interactive Price Charts</li>
          <li>Market Cap Rankings</li>
          <li>Currency Converter</li>
          <li>Detailed Coin Information</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Feature;
