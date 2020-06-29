import React, {useState} from "react";
import TestDataInterface, { SampleDataArrayProps } from "./TestDataInterface";
import SampleData from "./SampleData";
import ComparsionDetails from "./ComparisonDetails";


const BudgetBox = () => {
  const [data, setData] = useState(SampleData);
  

  console.log(data);
  return (
    <div className="budgetBox">
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
            {/* <ComparsionDetails title={"Income2"} object={num} /> */}
           
            <div className="budget-income-box">
              <h2>Income</h2>
              <section className="estimate-actual-holder">
                {num.budget.map((budgetNum, indexbudget) => (
                  <>
                    <div className="budget-estimate-income" key={indexbudget}>
                      <h3>Estimates</h3>
                      {budgetNum.monthContributions.map((mc, mcIndex) => (
                        <div className="budget-income" key={mcIndex}>
                          {mc.title} ${mc.amount}
                        </div>
                      ))}
                    </div>
                  </>
                ))}
                {num.actual.map((actualNum, actIndexbudget) => (
                  <>
                    <div className="budget-actual-income" key={actIndexbudget}>
                      <h3>Actual</h3>
                      {actualNum.monthContributions.map((ac, acIndex) => (
                        <div className="budget-income" key={acIndex}>
                          {ac.title} ${ac.amount}
                        </div>
                      ))}
                    </div>
                  </>
                ))}
              </section>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BudgetBox;
