import React from "react";

// Import images
import res1 from "../resources/res1.png";
import res2 from "../resources/res2.png";
import res3 from "../resources/res3.png";
import res4 from "../resources/res4.png";
import res5 from "../resources/res5.png";
import res6 from "../resources/res6.png";
import res7 from "../resources/res7.png";
import res8 from "../resources/res8.png";
import bannerImage from "../resources/banner.png";
import categoryIcon1 from "../resources/Category-Icon1.png";
import categoryIcon2 from "../resources/Category-Icon2.png";
import categoryIcon3 from "../resources/Category-Icon3.png";
import categoryIcon4 from "../resources/Category-Icon4.png";
import categoryIcon5 from "../resources/Category-Icon5.png";
import categoryIcon6 from "../resources/Category-Icon6.png";

function HomePage() {
  // Inline styles
  const containerStyle = {
    padding: "20px 200px",
    backgroundColor: "#f4f4f9",
  };

  const sectionStyle = {
    margin: "20px 0",
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "24%",
    padding: "10px",
    boxSizing: "border-box",
    marginBottom: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "10px",
  };

  const bannerStyle = {
    width: "100%", // Ensures the banner spans the full container width
    height: "auto", // Adjusts height automatically based on its aspect ratio
    marginBottom: "20px",
    marginTop: "50px",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#db4444",
    fontWeight: "700",
    fontSize: "30px",
    margin: "50px 0",
  };
  const categorySectionStyle = {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: "20px 0",
  };

  const categoryStyle = {
    width: "120px", // Smaller width to make the card compact
    height: "120px", // Set height equal to width to make it square
    textAlign: "center",
    padding: "10px",
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "5px", // Ensure space between cards
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  };

  const textStyle = {
    textAlign: "center",
    color: "#333",
    fontWeight: "600",
    fontSize: "18px",
  };

  const priceStyle = {
    textAlign: "center",
    color: "#b12704",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "5px",
  };

  const categories = [
    { name: "Phones", icon: categoryIcon1 },
    { name: "Computers", icon: categoryIcon2 },
    { name: "Smartwatch", icon: categoryIcon3 },
    { name: "Camera", icon: categoryIcon4 },
    { name: "Headphones", icon: categoryIcon5 },
    { name: "Gaming", icon: categoryIcon6 },
  ];

  const imagestyle = {
    width: "60px", // Smaller image size
    height: "60px", // Maintain aspect ratio
    marginBottom: "5px", // Space between image and text
  };

  return (
    <div style={containerStyle}>
      <div style={categorySectionStyle}>
        {categories.map((category, index) => (
          <div key={index} style={categoryStyle}>
            <img src={category.icon} alt={category.name} style={imagestyle} />
            <p style={textStyle}>{category.name}</p>
          </div>
        ))}
      </div>
      <h3 style={headingStyle}>Best Selling Products</h3>
      <div style={gridStyle}>
        {[res1, res2, res3, res4].map((image, index) => (
          <div key={index} style={cardStyle}>
            <img src={image} alt={`Product ${index + 1}`} style={imageStyle} />
            <p style={textStyle}>Product Name {index + 1}</p>
            <p style={priceStyle}>$260</p>
          </div>
        ))}
      </div>

      {/* Banner Image */}
      <img src={bannerImage} alt="Banner" style={bannerStyle} />

      <h3 style={headingStyle}>Explore Our Products</h3>
      <div style={gridStyle}>
        {[res5, res6, res7, res8].map((image, index) => (
          <div key={index} style={cardStyle}>
            <img src={image} alt={`Product ${index + 5}`} style={imageStyle} />
            <p style={textStyle}>Product Name {index + 5}</p>
            <p style={priceStyle}>$260</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
