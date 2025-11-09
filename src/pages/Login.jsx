import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"


const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })


    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Basic validation
        if (!credentials.email || !credentials.password) {
            alert("Please fill in all fields")
            return 
        }

        // You can replace this logic later with real authentication
        console.log("Login Data:", credentials)

        if (credentials.email && credentials.password) {
            alert("Login successful! Redirecting to Dashboard...")
            setCredentials({ email: "", password: "" })

            // Navigate to dashboard after login
            navigate("/dashboard")
        } else {
            alert("Invalid credentials, please try again.")
        }
    }

    return (
        <section className="login fade-in">
            <h2>Login to Green Farm</h2>
            <form onSubmit={handleSubmit}>
                <input type="email"
                    name="email"
                    placeholder="Email Address"
                    value={credentials.email}
                    onChange={handleChange}
                    required 
                />
                <input type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required 
                />

                <button type="submit">Login</button>
            </form>

            <p style={{ marginTop: "1rem", color: "var(--dark-green)"}}>
                Don't have an account? <a href="/signup" 
                style={{ color: "var(--primary-green)" }}>
                    Sign Up
                </a>
            </p>
        </section>
    )
}

export default Login