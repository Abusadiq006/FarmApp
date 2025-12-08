import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../index.css"
import Signup from "../pages/SignUp";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)


    const toggleMenu = () => setIsOpen(!isOpen)

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

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
            <div ref={menuRef} className={`navbar-links ${isOpen ? "open"
                : ""
            }`} onClick={() => setIsOpen(false)}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/signup">
                    Signup 
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/buy">
                    Buy
                </Link>
            </div>
        </nav>
    )
}

export default Navbar