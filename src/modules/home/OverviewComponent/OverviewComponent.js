import React, { useState } from "react";
import "./OverviewComponent.css";

const AddTransactionView = (props) => {
  const [amount, setAmount] = useState();
  const [desc, setDesc] = useState();
  const [type, setType] = useState("EXPENSE");

  const addTransaction = () => {
    props.addTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    console.log({ amount, desc, type });
    props.toggleAddTxn();
  };

  return (
    <>
      <div className="add-transaction-container">
        <input
          placeholder="Amount"
          value={amount}
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <div className="radio-box">
          <input
            type="radio"
            id="expense"
            name="type"
            value="EXPENSE"
            checked={type === "EXPENSE"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          <input
            type="radio"
            id="income"
            name="type"
            value="INCOME"
            checked={type === "INCOME"}
            onChange={(e) => setType(e.target.value)}
          />
          <label htmlFor="income">Income</label>
        </div>
        <div className="add-transaction-btn" onClick={addTransaction}>
          Add Transaction
        </div>
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
          Balance: ${props.income - props.expense}
          <div
            className="add-transaction-btn"
            onClick={() => toggleAddTxn(!isAddTxnVisible)}
          >
            {isAddTxnVisible ? "Cancel" : "ADD"}
          </div>
        </div>
        {isAddTxnVisible && (
          <AddTransactionView
            toggleAddTxn={toggleAddTxn}
            addTransaction={props.addTransaction}
          />
        )}

        <div className="expense-container">
          <div className="expense-box">
            Expense<span className="expense">${props.expense}</span>
          </div>
          <div className="expense-box">
            Income<span className="income">${props.income}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewComponent;
