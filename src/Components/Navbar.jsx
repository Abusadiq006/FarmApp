import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="navbar fade-in">
            {/* ===== Left: Logo ===== */}
            <div className="navbar-logo">
                <span>Green Farm</span>
            </div>

            {/* ===== Hamburger Icon (Mobile) ===== */}
            <div className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* ===== Right: Navigation Links ====== */}
            <div className={`navbar-links ${isOpen ? "open"
                : ""
            }`}>
                <Link to="/" onClick={closeMenu}>Home</Link>
                <Link to="/about" onClick={closeMenu}>About</Link>
                <Link to="/signup" onClick={closeMenu}>
                    <button>Sign Up</button>
                </Link>
                <Link to="/signup" onClick={closeMenu}>
                    <button>Login</button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar