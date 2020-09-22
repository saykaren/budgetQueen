import React, { useState } from "react";
import TestDataInterface, { SampleDataArrayProps } from "./TestDataInterface";
import SampleData from "./SampleData";
import ComparsionDetails from "./ComparisonDetails";
import Menu from "./Menu";
import Calculate from './Calculate';

const BudgetBox = () => {
  const [data, setData] = useState(SampleData);
  const [menu, setMenu] = useState(false);
  const [BeginBalanceState, setBeginBalanceState] = useState(4000);

  const calculate = () => {
    let adjustData = data;

    let totalExpensesArray : number[] = [];
    let sumExpenses : number = 0;

    let totalIncomeArray: number[] = [];
    let sumIncome : number = 0;
  
    const totalIncomeFunction = () => {
      adjustData[0].actual[0].monthContributions.map((income) =>
        totalIncomeArray.push(income.amount)
      );
 
    };
    totalIncomeFunction();
  

    const totalExpenseFunction = () => {
      adjustData[0].actual[0].monthExpenses.housingExpense.map((expense) =>
      totalExpensesArray.push(expense.amount)
      );
      adjustData[0].actual[0].monthExpenses.groceryExpense.map((expense) =>
      totalExpensesArray.push(expense.amount)
      );
      adjustData[0].actual[0].monthExpenses.discretionaryExpense.map((expense) =>
      totalExpensesArray.push(expense.amount)
      );
      adjustData[0].actual[0].monthExpenses.retirementSavings.map((expense) =>
      totalExpensesArray.push(expense.amount)
      );
      adjustData[0].actual[0].monthExpenses.collegeSavings.map((expense) =>
      totalExpensesArray.push(expense.amount)
      );
      adjustData[0].actual[0].monthExpenses.otherExpense.map((expense) =>
      totalExpensesArray.push(expense.amount)
      );
  
    };
    totalExpenseFunction();
   

    sumExpenses = totalExpensesArray.reduce((acc,num)=> acc+ num, 0)
    sumIncome = totalIncomeArray.reduce((acc,num)=> acc+ num, 0)
 

    let monthNetAmount = sumIncome - sumExpenses;
    console.table({monthNetAmount, sumExpenses, sumIncome, totalIncomeArray, totalExpensesArray})
  };



  console.log(data);
  return (
    <div className="budgetBox">
      {menu && (
        <section className="inputSection">
          <div onClick={() => setMenu(false)} className="menuOpen">
            &laquo;
          </div>

          <Menu />
        </section>
      )}
      {menu === false && (
        <div onClick={() => setMenu(true)} className="openTab">
          &raquo;
        </div>
      )}
      <div onClick={() => calculate()} id="refresh">
        Refresh
      </div>
      <h2 className="appTitle">Budget Queen</h2>
      {data &&
        data.map((num, numIndex) => (
          <div key={numIndex} className="monthDetail">
            <h2>{num.monthName}</h2>
            <div className="budget-overall-box">
              <div
                className={
                  num.begBalance >= 0
                    ? "budget-detail positiveBalance"
                    : "budget-detail negativeBalance"
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
                    ? "budget-detail positiveBalance"
                    : "budget-detail negativeBalance"
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
