import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <div className="hero">
        <h1>Blog</h1>
        <p>
          Latest news, updates, and insights from the world of cryptocurrency.
        </p>
      </div>
      <div className="blog-list">
        <div className="blog-post">
          <h2>Welcome to BlockchainBuzz!</h2>
          <p>
            Stay tuned for the latest updates, guides, and tips on tracking and
            analyzing cryptocurrencies.
          </p>
        </div>
        <div className="blog-post">
          <h2>Understanding Crypto Market Trends</h2>
          <p>
            Learn how to interpret market data and make informed decisions in
            the fast-moving crypto space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
