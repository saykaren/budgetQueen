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
              <ExpenseCategoryDetails title="Housing Expense" object={budgetNum.monthExpenses.housingExpense}/>
              <ExpenseCategoryDetails title="Grocery Expense" object={budgetNum.monthExpenses.groceryExpense}/>
              <ExpenseCategoryDetails title="Discretionary Funds" object={budgetNum.monthExpenses.discretionaryExpense}/>
              <ExpenseCategoryDetails title="Retirement Savings" object={budgetNum.monthExpenses.retirementSavings}/>
              <ExpenseCategoryDetails title="College Savings" object={budgetNum.monthExpenses.collegeSavings}/>
              <ExpenseCategoryDetails title="Other Expense" object={budgetNum.monthExpenses.otherExpense}/>
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
