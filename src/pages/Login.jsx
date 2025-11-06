import React, { useState } from "react";
import "../index.css"


const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })


    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Login Data:", credentials)
        alert("Login successful!")
        setCredentials({ email: "", password: "" })
    }

    return (
        <section className="login fade-in">
            <h2>Welcome Back to Green Farm</h2>
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