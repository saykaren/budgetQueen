import React, { useState } from "react";
import TestDataInterface, { SampleDataArrayProps } from "./TestDataInterface";
import SampleData from "./SampleData";
import ComparsionDetails from "./ComparisonDetails";
import TestSend from "./TestSend";

const BudgetBox = () => {
  const [data, setData] = useState(SampleData);

  console.log(data);
  return (
    <div className="budgetBox">
      <TestSend title={"Hello"} object={data[0]} />
      {data &&
        data.map((num, numIndex) => (
          <div key={numIndex}>
            <h2>{num.monthName}</h2>
            <div className="budget-overall-box">
              <div className="budget-detail">
                {" "}
                Beginning Balance ${num.begBalance}
              </div>
              <div className="budget-detail">
                Ending Balance ${num.endBalance}
              </div>
            </div>
            <ComparsionDetails title={"Income2"} object={num} />
          </div>
        ))}
    </div>
  );
};

export default BudgetBox;
