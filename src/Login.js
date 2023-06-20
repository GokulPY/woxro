import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:7000/viewdata');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      navigate(`/Home?username=${matchedUser.username}&email=${matchedUser.email}`);
    } else {
      alert('Username or password is incorrect');
      console.log('Invalid credentials');
    }
  };

  return (
    <>
      <h1 className="logo-name">Woxro Bank of India</h1>
      <div className="login-form-container">
        <h2>Login to your account</h2>
        <form>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <button type="button" className="login-button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <p className="signup-link">
          Don't have an account yet? <a href="/signup">Sign up</a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
