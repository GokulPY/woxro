import React, { useEffect, useState } from 'react';
import Header from './Header';
import './Statement.css';

const Statement = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(savedData);
  }, []);

  const calculateBalance = (index) => {
    let balance = 0;
    for (let i = 0; i <= index; i++) {
      balance += parseFloat(data[i].amount);
    }
    return balance.toFixed(2);
  };

  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
  };
  
  

  return (
    <>
      <Header />
      <div className='s-box'>
        <h1>Statement of Amount</h1>
        <table className='tsl'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Amount</th>
              <th>Detail</th>
              <th>Balance</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody style={{ color: 'black' }}>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.amount}</td>
                <td>Deposit</td>
                <td>{calculateBalance(index)}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Statement;
