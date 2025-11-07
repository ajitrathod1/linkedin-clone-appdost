import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", { name, email, password });
      alert("✅ Account created successfully! Please login.");
      navigate("/");
    } catch {
      alert("❌ Server error. Try again.");
    }
  };

  return (
    <div className="login-page">
      <h2>Create your LinkedIn Clone Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Create Account</button>
      </form>
      <p>
        Already registered?{" "}
        <span className="link" onClick={() => navigate("/")}>
          Login
        </span>
      </p>
    </div>
  );
}
