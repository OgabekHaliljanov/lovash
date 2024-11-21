import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Проверяем, существует ли уже такой пользователь
    if (storedUsers.find((user) => user.username === username)) {
      setError('Username already taken');
      return;
    }

    const newUser = { username, password };
    storedUsers.push(newUser);

    // Сохраняем список пользователей и данные нового пользователя в localStorage
    localStorage.setItem('users', JSON.stringify(storedUsers));
    localStorage.setItem('user', JSON.stringify(newUser));
    navigate('/');
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
