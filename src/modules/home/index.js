import OverviewComponent from "./OverviewComponent/OverviewComponent";
import "./style.css";
import TransactionComponent from "./TransactionComponent/TransactionComponent";

const HomeComponent = (props) => {
  return (
    <>
      <div className="container">
        <OverviewComponent />
        <TransactionComponent />
      </div>
    </>
  );
};

export default HomeComponent;
