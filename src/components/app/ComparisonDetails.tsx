import React from "react";
import { TestDataProps } from "./TestDataInterface";

interface ComparsionDetailsProp {
  title: string;
  object: TestDataProps;
}

const ComparsionDetails = ({ title, object }: ComparsionDetailsProp) => {
  return (
    <div className="budget-income-box">
      <h2>Income</h2>
      <section className="estimate-actual-holder">
        {object.budget.map((budgetNum, indexbudget) => (
          <>
            <div className="budget-estimate-income" key={indexbudget}>
              <h3>Estimates</h3>
              {budgetNum.monthContributions.map((mc, mcIndex) => (
                <div className="budget-income" id={`est${mcIndex}`} key={mcIndex}>
                  {mc.title} ${mc.amount}
                </div>
              ))}
            </div>
          </>
        ))}
        {object.actual.map((actualNum, actIndexbudget) => (
          <>
            <div className="budget-actual-income" key={actIndexbudget}>
              <h3>Actual</h3>
              {actualNum.monthContributions.map((ac, acIndex) => (
                <div className="budget-income" id={`act${acIndex}`} key={acIndex}>
                  {ac.title} ${ac.amount}
                </div>
              ))}
            </div>
          </>
        ))}
        {object.actual.map((actualNum, actIndexbudget) => (
          <>
            <div className="budget-actual-income" key={actIndexbudget}>
              <h3>Comparison</h3>
              {/* {object.map((bud, budIndex) => (
                <div className="budget-income" key={budIndex}>
                  {ac.title} ${}
                </div>
              ))} */}
              <div className="budget-income" >
           
              </div>
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default ComparsionDetails;