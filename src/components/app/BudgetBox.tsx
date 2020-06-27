import React from "react";
import TestDataInterface from "./TestDataInterface";
import SampleData from "./SampleData";

interface BudgetBoxProps {
  data?: TestDataInterface;
}

const BudgetBox = ({ data }: BudgetBoxProps) => {
  console.log(SampleData);
  return (
    <div className="budgetBox">
       {SampleData &&
       SampleData.map((num,index)=>(
        <div key={index}>
        <h2 >{num.monthName}</h2>
    <div className='budget-detail'>${num.begBalance}</div>
    <div className='budget-detail'>${num.endBalance}</div>
    </div>
       ))
       }
      <h2>Month </h2>
      <div className="budget-container">
        <div className="budget-headers">Budget Item</div>
        <div className="budget-estimates">Budget Estimate</div>
        <div className="budget-actual">Budget Actual</div>
        <div className="budget-eval">Evaluation</div>
      </div>
      <div className="budget-container">
        <div className="budget-headers">Items</div>
        <div className="budget-estimates">$500</div>
        <div className="budget-actual">$550</div>
        <div className="budget-eval">($50)</div>
      </div>
    </div>
  );
};

export default BudgetBox;
