import React from "react";
import "../index.css"

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="footer fade-in">
            <p>© {year} Green Farm. All rights reserved.</p>
            <p>
                Built by <strong>Farmer Abusadiq</strong>
            </p>
        </footer>
    )
}

export default Footer