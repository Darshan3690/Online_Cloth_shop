
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Login from './compents/Login';
import Signup from './compents/Signup';
import Home from './compents/Home';
import Header from './compents/Header';
import Mycard from './compents/Mycard';
import Footer from './compents/Footer';
import RefrshHandler from './RefrshHandler';
import About from './compents/About';
import Contact from './compents/Contect';

function App() {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cart state
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Private route protection
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  // Ensure to show the login/signup page first if not authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Handle authentication on refresh */}
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />

        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        
        <Routes>
          {/* Public routes: Show login or signup as the default route */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
          
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />

          {/* Private route for authenticated users */}
          <Route path="/home" element={
            <PrivateRoute>
              <Home cart={cart} setCart={setCart} />
            </PrivateRoute>
          } />

          <Route path="/mycard" element={
            <PrivateRoute>
              <Mycard cartAllProduct={cart} setCartAllProduct={setCart} />
            </PrivateRoute>
          } />
          {/* Optional other routes */}
          <Route path="/about" element={<About />} /> 
           <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
