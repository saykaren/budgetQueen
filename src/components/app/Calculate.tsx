import React from "react";
import SampleDataArrayProps, { TestDataProps } from "./TestDataInterface";

interface CalculateProps {
  data: Array<TestDataProps>;
}

const Calculate = ({ data }: CalculateProps) => {
  let newData: Array<TestDataProps> = data;

  const calculateMe = () => {
    newData.map((month, indexMonth) => {
      console.log({ indexMonth });

      let totalExpensesArray: number[] = [];
      let sumExpenses: number = 0;

      let totalIncomeArray: number[] = [];
      let sumIncome: number = 0;

      const totalIncomeFunction = () => {
        newData[indexMonth].actual[0].monthContributions.map((income) =>
          totalIncomeArray.push(income.amount)
        );
      };
      totalIncomeFunction();

      const totalExpenseFunction = () => {
        newData[
          indexMonth
        ].actual[0].monthExpenses.housingExpense.map((expense) =>
          totalExpensesArray.push(expense.amount)
        );
        newData[
          indexMonth
        ].actual[0].monthExpenses.groceryExpense.map((expense) =>
          totalExpensesArray.push(expense.amount)
        );
        newData[
          indexMonth
        ].actual[0].monthExpenses.discretionaryExpense.map((expense) =>
          totalExpensesArray.push(expense.amount)
        );
        newData[
          indexMonth
        ].actual[0].monthExpenses.retirementSavings.map((expense) =>
          totalExpensesArray.push(expense.amount)
        );
        newData[
          indexMonth
        ].actual[0].monthExpenses.collegeSavings.map((expense) =>
          totalExpensesArray.push(expense.amount)
        );
        newData[
          indexMonth
        ].actual[0].monthExpenses.otherExpense.map((expense) =>
          totalExpensesArray.push(expense.amount)
        );
      };
      totalExpenseFunction();

      sumExpenses = totalExpensesArray.reduce((acc, num) => acc + num, 0);
      sumIncome = totalIncomeArray.reduce((acc, num) => acc + num, 0);

      let monthNetAmount = sumIncome - sumExpenses;
      console.table({
        monthNetAmount,
        sumExpenses,
        sumIncome,
        totalIncomeArray,
        totalExpensesArray,
      });
    });
  };

  return (
    <div onClick={() => calculateMe()} id="refresh">
      Refresh Me
    </div>
  );
};

export default Calculate;
