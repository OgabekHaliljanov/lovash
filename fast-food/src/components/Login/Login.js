import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8081/auth/login", { username, password });
      localStorage.setItem("token", response.data.token); // Сохраняем токен
      alert("Login successful!");
      onLogin();
      navigate("/home");
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
