import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isHovered, setIsHovered] = useState({
    home: false,
    contact: false,
    about: false,
    signUp: false,
  });

  // Header style
  const headerStyle = {
    backgroundColor: "#fff",
    display: "flex",
    position: "sticky",
    zIndex: 1000,
    top: 0,
    borderBottom: "solid 1px #000",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  };

  // Navigation style
  const navStyle = {
    display: "flex",
    alignItems: "center",
    width: "30%",
    justifyContent: "space-between",
    flexShrink: 2,
  };

  // Link style with hover effect
  const navLinkStyle = (index) => ({
    textDecoration: "none",
    color: isHovered[index] ? "#db4444" : "#000",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "600",
  });

  // Logo style
  const logoStyle = {
    fontWeight: "700",
    margin: "30px 150px 20px 0px",
    cursor: "pointer",
    fontSize: "24px",
  };

  // Search box style
  const searchBoxStyle = {
    width: "70%",
    position: "relative",
    display: "inline-block",
  };

  // Input style
  const inputStyle = {
    padding: "10px 50px 10px 10px",
    fontSize: "16px",
    backgroundColor: "#f5f5f5",
    border: "none",
    borderRadius: "2px",
    width: "100%",
  };

  // Icon style for the search icon inside the search box
  const iconStyle = {
    position: "absolute",
    top: "50%",
    right: "-40px", // Ensuring it does not move too far
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#db4444",
    fontSize: "1.5em",
  };

  // Style for heart and cart icons
  const iconsStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: "100px", // Ensure there's some space after the search box
  };

  return (
    <header style={headerStyle}>
      <h5 style={logoStyle}>EXCLUSIVE</h5>
      <div style={navStyle}>
        {["home", "contact", "about", "signUp"].map((link, index) => (
          <a
            key={link}
            style={navLinkStyle(link)}
            href="#"
            onMouseEnter={() => setIsHovered({ ...isHovered, [link]: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, [link]: false })}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={searchBoxStyle}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={inputStyle}
          />
          <FontAwesomeIcon icon={faSearch} style={iconStyle} />
        </div>
        <div style={iconsStyle}>
          <FontAwesomeIcon
            icon={faHeart}
            style={{ fontSize: "1.5em", color: "#db4444" }}
          />
          <FontAwesomeIcon
            icon={faShoppingCart}
            style={{ fontSize: "1.5em", color: "#db4444", marginLeft: "10px" }}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
