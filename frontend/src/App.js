// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import EditProfile from "./pages/EditProfile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartPage from "./pages/Cart";
import ContactPage from "./pages/ContactUs"
import ProductPage from "./pages/product"
import AboutPage  from "./pages/About";

function App() {
  const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", // Ensures the container takes at least the height of the viewport
  };

  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <main style={{ flex: 1 }}>
          {" "}
          {/* Makes the main content area flexible */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/cart" element={<CartPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            {/* Additional routes here */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
