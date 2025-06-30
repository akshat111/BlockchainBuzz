import React from "react";
import "./Auth.css";

const Auth = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-left">
          <h2>Sign Up</h2>
          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>
            <button type="submit" className="auth-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className="auth-right">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="auth-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
