import React, { useState } from 'react';
import Header from './Header';

const Deposit = () => {
  const [inputValue, setInputValue] = useState('');

  const handleDeposit = () => {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    savedData.push({ amount: inputValue });
    localStorage.setItem('data', JSON.stringify(savedData));
    setInputValue('');
  };

  return (
    <>
      <Header />
      <div className='home-box'>
        <h1>Deposit Money</h1>
        <label htmlFor='amount'>Amount</label>
        <input
          style={{ padding: '4px 10px', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}
          placeholder='Enter amount to Deposit'
          type='number'
          id='amount'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer', marginLeft: '10px' }}
          onClick={handleDeposit}
        >
          Deposit
        </button>
      </div>
    </>
  );
};

export default Deposit;
