import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8081/auth/register", { username, password });
      alert("Registration successful! Please login.");
      onRegister();
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Register;
