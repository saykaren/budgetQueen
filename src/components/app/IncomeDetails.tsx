import React from "react";
import { TestDataProps } from "./TestDataInterface";
import ExpenseCategoryDetails from "./ExpenseCategoryDetails";

interface IncomeDetailsProp {
  title: string;
  object: TestDataProps;
}

const IncomeDetails = ({ title, object }: IncomeDetailsProp) => {
  return (
    <div className="budget-income-box">
      <h2>{title}</h2>
      <section className="estimate-actual-holder">
        {object.budget.map((budgetNum, indexbudget) => (
          <>
            <div className="budget-estimate-income" key={indexbudget}>
              <h3>Estimates</h3>
              <ExpenseCategoryDetails
                title=""
                object={budgetNum.monthContributions}
              />
            </div>
          </>
        ))}
        {object.actual.map((actualNum, indexActual) => (
          <>
            <div className="budget-estimate-income" key={indexActual}>
              <h3>Actual</h3>
              <ExpenseCategoryDetails
                title=""
                object={actualNum.monthContributions}
              />
            </div>
          </>
        ))}
        {/* <div className="budget-actual-income">
          <h3>Comparison</h3>
          <div className="budget-income">
            {object.actual.map((compare, comIndex) => (
              <>
                {compare.monthContributions.map((comparison, compIndex) => (
                  <>{comparison.amount}</>
                ))}
              </>
            ))}

            {object.budget.map((compare, comIndex) => (
              <>
                {compare.monthContributions.map((comparison, compIndex) => (
                  <>{comparison.amount}</>
                ))}
              </>
            ))}
          </div>
        </div> */}
 
        <div className="budget-actual-income">
          <h3>Comparison2</h3>
          {object.actual[0].monthContributions.map(
            (container, indexContainer) => (
              <div className="expenseCategories" key={indexContainer}>
                <div className='budget-income'>
                  {object.actual[0].monthContributions[indexContainer].title}{" "}
                  {object.actual[0].monthContributions[indexContainer].amount -
                    object.budget[0].monthContributions[indexContainer].amount}
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default IncomeDetails;
