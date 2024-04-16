import React from "react";

function Signup() {
  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "65vh",
    backgroundColor: "#f4f4f9",
  };

  const formContainerStyle = {
    background: "white",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "50%",
    marginLeft: "25%",
  };

  const headingStyle = {
    marginBottom: "20px", // Add bottom margin to the heading
  };
  const inputGroupStyle = {
    marginBottom: "1.5rem",
    position: "relative",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem",
    border: "2px solid #ccc",
    borderRadius: "4px",
    fontSize: "16px",
  };

  const labelStyle = {
    position: "absolute",
    top: "-10px",
    left: "10px",
    background: "white",
    padding: "0 10px",
    fontSize: "14px",
    color: "#555",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#db4444",
    border: "none",
    borderRadius: "4px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  const switchFormStyle = {
    textAlign: "center",
    marginTop: "1rem",
  };

  const linkStyle = {
    color: "#db4444",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <main className="container-fluid">
        <div style={formContainerStyle}>
          <h2 style={headingStyle}>Sign Up</h2>
          <form action="/submit-signup" method="post">
            <div style={inputGroupStyle}>
              <input type="text" required name="username" style={inputStyle} />
              <label style={labelStyle}>Username</label>
            </div>
            <div style={inputGroupStyle}>
              <input type="email" required name="email" style={inputStyle} />
              <label style={labelStyle}>Email</label>
            </div>
            <div style={inputGroupStyle}>
              <input
                type="password"
                required
                name="password"
                style={inputStyle}
              />
              <label style={labelStyle}>Password</label>
            </div>
            <div style={inputGroupStyle}>
              <input
                type="password"
                required
                name="confirmPassword"
                style={inputStyle}
              />
              <label style={labelStyle}>Confirm Password</label>
            </div>
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#852828")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#db4444")}
            >
              Sign Up
            </button>
            <p style={switchFormStyle}>
              Already have an account?{" "}
              <a href="/login" style={linkStyle}>
                Log In
              </a>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Signup;
