import React, { useState } from "react";
import TestDataInterface, { SampleDataArrayProps } from "./TestDataInterface";
import SampleData from "./SampleData";
import ComparsionDetails from "./ComparisonDetails";

const BudgetBox = () => {
  const [data, setData] = useState(SampleData);
  const [BeginBalanceState, setBeginBalanceState] = useState(4000);

  console.log(data);
  return (
    <div className="budgetBox">
      {data &&
        data.map((num, numIndex) => (
          <div key={numIndex} className="monthDetail">
            <h2>{num.monthName}</h2>
            <div className="budget-overall-box">
              <div        className={
                num.begBalance >= 0
                  ? 'budget-detail positiveBalance'
                  : 'budget-detail negativeBalance'
              }
              
              >
                <b>Beginning Balance ${num.begBalance}</b>
              </div>
            </div>
            <ComparsionDetails title={"Income2"} object={num} />
            <div className="budget-overall-box">
              <div 
               className={
                num.endBalance >= 0
                  ? 'budget-detail positiveBalance'
                  : 'budget-detail negativeBalance'
              }
              >
                Ending Balance ${num.endBalance}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BudgetBox;
