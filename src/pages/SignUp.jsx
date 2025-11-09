import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    console.log("Signup Data:", formData);
    alert("Signup successful! Redirecting to dashboard...");

    // ✅ reset form
    setFormData({ email: "", password: "" });

    // ✅ redirect user to dashboard after signup
    navigate("/dashboard");
  };

  return (
    <div className="signup fade-in">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
        name="text"
        placeholder="fullname"
        value={formData.fullname}
        onChange={handleChange}
        required />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
