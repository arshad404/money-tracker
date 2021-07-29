import { useState, useEffect } from "react";
import "./TransactionComponent.css";

const TransactionCell = (props) => {
  console.log(`payload is ${props}`);
  return (
    <>
      <div
        className={
          props.payload?.type === "EXPENSE" ? "cell expense-c" : "cell income-c"
        }
      >
        <span>{props.payload.desc}</span>
        <span>${props.payload.amount}</span>
      </div>
    </>
  );
};

const TransactionComponent = (props) => {
  const [filteredTransaction, updateTransaction] = useState(props.transactions);
  const [searchText, updateSearchText] = useState("");

  const filterData = (searchText) => {
    if (!searchText || !searchText.trim().length) {
      updateTransaction(props.transactions);
      return;
    }
    let txn = [...props.transactions];
    txn = txn.filter((payload) =>
      payload.desc.toLowerCase().includes(searchText.toLowerCase().trim())
    );
    updateTransaction(txn);
  };

  useEffect(() => {
    filterData(searchText);
  }, [props.transactions]);

  return (
    <div className="container">
      Transactions
      <input
        placeholder="search"
        value={searchText}
        onChange={(e) => {
          updateSearchText(e.target.value);
          filterData(e.target.value);
        }}
      />
      {filteredTransaction.length
        ? filteredTransaction?.map((payload) => (
            <TransactionCell payload={payload} />
          ))
        : ""}
    </div>
  );
};

export default TransactionComponent;
