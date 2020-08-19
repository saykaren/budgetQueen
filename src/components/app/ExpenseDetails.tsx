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
              <ExpenseCategoryDetails
                title="Housing Expense"
                object={budgetNum.monthExpenses.housingExpense}
              />
              <ExpenseCategoryDetails
                title="Grocery Expense"
                object={budgetNum.monthExpenses.groceryExpense}
              />
              <ExpenseCategoryDetails
                title="Discretionary Funds"
                object={budgetNum.monthExpenses.discretionaryExpense}
              />
              <ExpenseCategoryDetails
                title="Retirement Savings"
                object={budgetNum.monthExpenses.retirementSavings}
              />
              <ExpenseCategoryDetails
                title="College Savings"
                object={budgetNum.monthExpenses.collegeSavings}
              />
              <ExpenseCategoryDetails
                title="Other Expense"
                object={budgetNum.monthExpenses.otherExpense}
              />
            </div>
          </>
        ))}

        {object.actual.map((actualNum, indexActual) => (
          <>
            <div className="budget-estimate-income" key={indexActual}>
              <h3>Actual</h3>
              <ExpenseCategoryDetails
                title="Housing Expense"
                object={actualNum.monthExpenses.housingExpense}
              />
              <ExpenseCategoryDetails
                title="Grocery Expense"
                object={actualNum.monthExpenses.groceryExpense}
              />
              <ExpenseCategoryDetails
                title="Discretionary Funds"
                object={actualNum.monthExpenses.discretionaryExpense}
              />
              <ExpenseCategoryDetails
                title="Retirement Savings"
                object={actualNum.monthExpenses.retirementSavings}
              />
              <ExpenseCategoryDetails
                title="College Savings"
                object={actualNum.monthExpenses.collegeSavings}
              />
              <ExpenseCategoryDetails
                title="Other Expense"
                object={actualNum.monthExpenses.otherExpense}
              />
            </div>
          </>
        ))}
        <div className="budget-estimate-income">
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

export default ExpenseDetails;
