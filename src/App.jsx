
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components from the 'src/component' directory
import Homepage from './component/Homepage.jsx'; // Corrected path
import Login from './component/Login.jsx';       // Corrected path
import Register from './component/Register.jsx';   // Corrected path
// import About from './component/About.jsx';
// import Menu from './component/Menu.jsx';
// import ThemeCake from './component/ThemeCake.jsx';
// import ContactUs from './component/ContactUs.jsx';
// import Cart from './component/Cart.jsx';
// import Order from './component/Order.jsx';

import './App.css'; // You can keep App.css for general styles or remove if not needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/theme-cake" element={<ThemeCake />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} /> */}
          {/* <Route path="/order" element={<Order />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;