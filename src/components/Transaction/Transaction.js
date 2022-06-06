import React from "react";
import "./transaction.css";

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="transactionWrapper">
        <h3 className="title">Add New Transaction</h3>
        <hr className="transRow" />
        <div className="addTrans">
          <div className="formGroup">
            <p className="label">Text</p>
            <input type="text" placeholder="Enter Text" />
          </div>
          <div className="formGroup">
            <p className="label">Amount</p>
            <p className="label">[Negative - Expenses || Positive - Income]</p>
            <input type="number" placeholder="Enter Amount" />
          </div>
          <button className="transBtn">Add Transaction</button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
