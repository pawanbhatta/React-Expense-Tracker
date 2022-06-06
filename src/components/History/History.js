import React from "react";
import "./history.css";

const History = () => {
  return (
    <div className="history">
      <div className="historyWrapper">
        <h3 className="title">History</h3>
        <hr className="histRow" />
        <div className="cashFlows">
          <div className="cash inflow">
            <p className="name">Cash</p>
            <p className="amount">+700</p>
          </div>
          <div className="cash outflow">
            <p className="name">Mobile</p>
            <p className="amount">-400</p>
          </div>
          <div className="cash inflow">
            <p className="name">Deposit</p>
            <p className="amount">+300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
