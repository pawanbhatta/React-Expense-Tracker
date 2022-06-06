import React from "react";
import "./account.css";

const Account = () => {
  return (
    <div className="account">
      <div className="accountWrapper">
        <div className="accountTop">
          <h3 className="title">YOUR BALANCE</h3>
          <h5 className="balance">$ 143.00</h5>
        </div>
        <div className="accountBottom">
          <div className="left">
            <h3 className="title accTitle">INCOME</h3>
            <p className="income">$ 400</p>
          </div>
          <hr className="row" />
          <div className="right">
            <h3 className="title accTitle">EXPENSE</h3>
            <p className="expense">$ 180</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
