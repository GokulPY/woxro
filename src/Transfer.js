import React, { useState } from 'react';
import Header from './Header';

const Transfer = () => {
  const [transfer, setTransfer] = useState('');

  const handleTransfer = () => {
    console.log( transfer);
  };

  return (
    <>
      <Header />
      <div className='home-box'>
        <h1>Transfer Money</h1>
        <label htmlFor="amount">Email Address</label>
        <input style={{ padding: '4px 10px', borderRadius: '5px' , cursor: 'pointer' , marginLeft: '10px' , marginBottom: "5px" }}
          placeholder='Enter Email Address' type="email"
          id="amount"
          value={transfer}
          onChange={(e) => setTransfer(e.target.value)}
        /><br></br>
        <label htmlFor="amount">Amount</label>
        <input style={{ padding: '4px 10px', borderRadius: '5px' , cursor: 'pointer' , marginBottom: "5px" , marginLeft: "57px" }}
          placeholder='Enter amount to Deposit' type="number"
          id="amount"
          value={transfer}
          onChange={(e) => setTransfer(e.target.value)}
        /><br></br>
        <button style={{ backgroundColor: 'green', color: 'white', padding: '5px 10px', borderRadius: '5px' , cursor: 'pointer' , marginLeft: '165px' , marginTop: "5px" }} onClick={handleTransfer}>Transfer</button>
      </div>
    </>
  );
};

export default Transfer;
