import { useState, useEffect } from "react";
import OverviewComponent from "./OverviewComponent/OverviewComponent";
import "./style.css";
import TransactionComponent from "./TransactionComponent/TransactionComponent";

const HomeComponent = (props) => {
  const [transactions, updateTransactions] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransactions(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let income = 0;
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp += payload.amount)
        : (income += payload.amount);
    });
    updateExpense(exp);
    updateIncome(income);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <>
      <div className="container">
        <OverviewComponent
          addTransaction={addTransaction}
          expense={expense}
          income={income}
        />
        <TransactionComponent transactions={transactions} />
      </div>
    </>
  );
};

export default HomeComponent;
