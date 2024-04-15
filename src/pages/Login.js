// src/pages/Login.js
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Login() {
  return (
    <div>
      <Header />
      <main className="container-fluid">
        <div className="form-container">
          <h2>Login</h2>
          <form action="/submit-login" method="post">
            <div className="input-group">
              <input type="email" required name="email" />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="password" required name="password" />
              <label>Password</label>
            </div>
            <button type="submit">Login</button>
            <p className="switch-form">
              Don't have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
