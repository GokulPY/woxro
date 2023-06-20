import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Home.css';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const usernameParam = searchParams.get('username');
  const emailParam = searchParams.get('email');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    let calculatedBalance = 0;
    for (let i = 0; i < savedData.length; i++) {
      calculatedBalance += parseFloat(savedData[i].amount);
    }
    setBalance(calculatedBalance);
  }, []);

  useEffect(() => {
    localStorage.setItem('username', usernameParam);
    localStorage.setItem('email', emailParam);
  }, [usernameParam, emailParam]);

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    setUsername(savedUsername);
    setEmail(savedEmail);
  }, []);

  return (
    <>
      <Header />
      <div className='home-box'>
        <h1>
          Welcome <span style={{ color: 'cyan' }}>{username}</span>
        </h1>
        <h2>Your Id: <span>{email}</span></h2>
        <h2>Your Balance: <span>{balance.toFixed(2)}</span> INR</h2>
      </div>
    </>
  );
};

export default Home;
