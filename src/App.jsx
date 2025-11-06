import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing Components
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// Importing Pages
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />


        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        
        <Footer />
      </div>
    </Router>
  )
}

export default App