import React from "react";


import { Link } from "react-router-dom"; // Ensure Link is imported
import { FaUser, FaShoppingCart } from "react-icons/fa";

import homeImage from "../assets/Image/home.png";
 // Make sure the path is correct

import "./Homepage.css"; // Ensure CSS is imported in the same directory

function Homepage() {
  return (
    <div className="homepage"> {/* Consistent with .homepage in CSS */}
      <header className="navbar">
        <Link to="/" className="logo">🎂 Cake</Link> {/* Make logo a link to home */}
        <nav>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/theme-cake">Theme Cake</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <div className="nav-icons">
          {/* Using auth-buttons div from CSS for grouping */}
          <div className="auth-buttons">
            <Link to="/login">
              <button className="login btn">Login</button> {/* Using .login and .btn from CSS */}
            </Link>
            <Link to="/register">
              <button className="register btn">Register</button> {/* Added Register button */}
            </Link>
          </div>
          {/* Icon for user login/profile */}
          <Link to="/login">
             <FaUser className="icon" /> 
          </Link>
          {/* Icon for shopping cart */}
          <Link to="/cart"> {/* Link to cart page */}
             <FaShoppingCart className="icon" /> 
          </Link>
        </div>
      </header>

      {/* Main section class names now aligned with CSS: .main-section, .image-container, .content-container */}
      <main className="main-section">
        <div className="image-container">
         <img src={homeImage} alt="Delicious Cake" />
        </div>
        <div className="content-container">
          <h1 className="main-heading">Delicious cake for every occasion!</h1>
          <p className="welcome-text">
            <strong>
              Welcome to Bake Box, where each slice embodies sweetness and love!
            </strong>
            <br />
            Our specialty is creating cakes that add a unique touch to your celebrations.
          </p>
          <Link to="/order" className="order-btn"> {/* Use Link for Order Now */}
            Order Now
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Homepage;