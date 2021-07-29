import React, { useEffect, useState } from "react";
import "./OverviewComponent.css";

const AddTransactionView = () => {
  return (
    <>
      <div className="add-transaction-container">
        <input placeholder="Amount" />
        <input placeholder="Description" />
        <div className="radio-box">
          <input type="radio" id="expense" name="type" value="EXPENSE" />
          <label htmlFor="expense">Expense</label>
          <input type="radio" id="income" name="type" value="INCOME" />
          <label htmlFor="income">Income</label>
        </div>
        <div className="add-transaction-btn">Add Transaction</div>
      </div>
    </>
  );
};

const OverviewComponent = (props) => {
  const [isAddTxnVisible, toggleAddTxn] = useState(false);
  return (
    <>
      <div className="container">
        <div className="balance-box">
          Balance: $10000
          <div className="add-transaction-btn">
            {isAddTxnVisible ? "Cancel" : "ADD"}
          </div>
        </div>
        {!isAddTxnVisible && <AddTransactionView />}
      </div>
    </>
  );
};

export default OverviewComponent;
