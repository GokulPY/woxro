import React, { useState } from 'react';
import "./Signup.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsandpolicy, setTermsandpolicy] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
      await axios.post("http://localhost:7000/createdata", {
        username,
        email,
        password,
        termsandpolicy
      })
    navigate("/Login")
  }

  return (
    <>
    <h1 className='logo-name'>Woxro Bank of India</h1>
    <div className="registration-form-container">
      <h2>Create new account</h2>
      <form>
      <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="registration-input"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e=> setEmail(e.target.value)}
          required
          className="registration-input"
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="registration-input"
        />
        <label>
          <input
            type="checkbox"
            checked={termsandpolicy}
            onChange={e => setTermsandpolicy(e.target.checked)}
          />
          Agree the terms and policy
        </label>
        <button type="submit" className="registration-button" onClick={handleSignup}>Sign up</button>
      </form>
      <p className="signup-link">Already have an account? <a href="/signup">Sign in</a></p>
    </div>
    </>
  );
};

export default RegistrationForm;
