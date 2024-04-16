import React from "react";
import qrCodeImage from "../resources/Qrcode 1.png";
import googlePlayImage from "../resources/GooglePlay.png";
import appStoreImage from "../resources/download-appstore.png";
import facebookIcon from "../resources/Icon-Facebook.png";
import twitterIcon from "../resources/Group.png";
import instagramIcon from "../resources/icon-instagram.png";
import linkedInIcon from "../resources/Icon-Linkedin.png";

function Footer() {
  const footerStyle = {
    backgroundColor: "#000",
    color: "white",
    textAlign: "left",
    width: "100%",
    padding: "20px 200px",
    marginBottom: "0px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const iconStyle = {
    width: "50px",
    height: "30px",
  };

  return (
    <footer style={footerStyle}>
      <div className="container-fluid">
        <div className="row padding">
          {/* Additional new column for subscribing and offers */}
          <div className="col-md-2">
            <h5 className="text-uppercase fw-bold">Exclusive</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={linkStyle}>
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" style={linkStyle}>
                  Get 10% off on your first order
                </a>
              </li>
              <li>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter your email"
                  />
                  <a href="#" style={linkStyle}>
                    <i className="fas fa-paper-plane"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* Support Column */}
          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" style={linkStyle}>
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </a>
              </li>
              <li>
                <a href="#" style={linkStyle}>
                  exclusive@gmail.com
                </a>
              </li>
              <li>
                <a href="#" style={linkStyle}>
                  +88015-88888-9999
                </a>
              </li>
            </ul>
          </div>
          {/* Account Column */}
          <div className="col-md-2">
            <h6 className="text-uppercase fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li>
                <a href="login.html" style={linkStyle}>
                  My Account
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  Login / Register
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  Cart
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  Wishlist
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  Shop
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Link Column */}
          <div className="col-md-2">
            <h6 className="text-uppercase fw-bold">Quick Link</h6>
            <ul className="list-unstyled">
              <li>
                <a href="login.html" style={linkStyle}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  Terms Of Use
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="login.html" style={linkStyle}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="text-uppercase fw-bold">Download App</h6>
            <ul className="list-unstyled">
              <li>
                <span className="text-sm">Save $3 with App New User Only</span>
              </li>
              <li>
                <div className="containerimg">
                  <div className="qrimage">
                    <img src={qrCodeImage} alt="QR code" style={imageStyle} />
                  </div>
                  <div className="appimages">
                    <img
                      src={googlePlayImage}
                      alt="Google Play"
                      style={imageStyle}
                    />
                    <img
                      src={appStoreImage}
                      alt="App Store"
                      style={imageStyle}
                    />
                  </div>
                </div>
              </li>
              <div className="row mt-2">
                <img src={facebookIcon} alt="Facebook" style={iconStyle} />
                <img src={twitterIcon} alt="Twitter" style={iconStyle} />
                <img src={instagramIcon} alt="Instagram" style={iconStyle} />
                <img src={linkedInIcon} alt="LinkedIn" style={iconStyle} />
              </div>
            </ul>
          </div>
          {/* More columns as needed */}
        </div>
        <div className="row bordertop d-flex justify-content-center">
          <p className="text-center">
            &copy; Copyright Rimel 2024. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
