import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#343a40",
    color: "white",
    padding: "20px",
    textAlign: "left",
  };

  const linkStyle = {
    color: "#f8f9fa",
    textDecoration: "none",
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; Copyright Rimel 2024. All right reserved</p>
      {/* Other elements */}
    </footer>
  );
}

export default Footer;
