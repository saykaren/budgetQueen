import React from "react";
import { TestDataProps } from "./TestDataInterface";
import ExpenseCategoryDetails from "./ExpenseCategoryDetails";

interface ExpenseDetailsProp {
  title: string;
  object: TestDataProps;
}

const ExpenseDetails = ({ title, object }: ExpenseDetailsProp) => {
  return (
    <div className="budget-income-box">
      <h2>{title}</h2>
      <section className="estimate-actual-holder">
        {object.budget.map((budgetNum, indexbudget) => (
          <>
            <div className="budget-estimate-income" key={indexbudget}>
              <h3>Estimates</h3>
              <div className="expenseCategories">
                <h4>Housing Expense</h4>

                {budgetNum.monthExpenses.housingExpense.map((he, heIndex) => (
                  <div
                    className="budget-income"
                    id={`est${heIndex}`}
                    key={heIndex}
                  >
                    {he.title} ${he.amount}
                  </div>
                ))}
              </div>
              <div className="expenseCategories">
                <h4>Grocery Expense</h4>

                {budgetNum.monthExpenses.groceryExpense.map((ge, geIndex) => (
                  <div
                    className="budget-income"
                    id={`est${geIndex}`}
                    key={geIndex}
                  >
                    {ge.title} ${ge.amount}
                  </div>
                ))}
              </div>
              <ExpenseCategoryDetails title="expense2" object={budgetNum.monthExpenses}/>
            </div>
            
          </>
        ))}
        {object.actual.map((actualNum, actIndexbudget) => (
          <>
            <div className="budget-actual-income" key={actIndexbudget}>
              <h3>Actual</h3>
              {actualNum.monthContributions.map((ac, acIndex) => (
                <div
                  className="budget-income"
                  id={`act${acIndex}`}
                  key={acIndex}
                >
                  {ac.title} ${ac.amount}
                </div>
              ))}
            </div>
          </>
        ))}
        {object.actual.map((compare, comIndex) => (
          <>
            <div className="budget-actual-income">
              <h3>Comparison</h3>
              {compare.monthContributions.map((comparison, compIndex) => (
                <div className="budget-income" key={compIndex}>
                  Comparison here
                </div>
              ))}
            </div>
          </>
        ))}
      </section>
    </div>
  );
};

export default ExpenseDetails;
