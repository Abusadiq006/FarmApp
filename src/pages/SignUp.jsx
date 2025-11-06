import React, { useState } from "react";
import "../index.css"


const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        e.preventDefault()
        console.log("Signup Data:", formData)
        alert("Signup successful!")
        setFormData({ fullname: "", email: "", password: ""})
    }

    return (
        <section className="signup fade-in">
            <h2>Create Your Green Farm Account</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="fullname"
                    placeholder="Full Name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required 
                />
                <input type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                />
                <input type="text"
                    name="password"
                    placeholder="Create Password"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                />


                <button type="submit">Sign Up</button>
            </form>
        </section>
    )
}

export default Signup