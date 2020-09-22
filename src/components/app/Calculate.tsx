import React from "react";
import { TestDataProps } from "./TestDataInterface";

interface CalculateProps {
    data: TestDataProps;
} 


const Calculate = ({data}: CalculateProps)=>{

    // const calculate = () => {
    //     let adjustData: TestDataProps = data;
    
    //     let totalExpensesArray : number[] = [];
    //     let sumExpenses : number = 0;
    
    //     let totalIncomeArray: number[] = [];
    //     let sumIncome : number = 0;
      
    //     const totalIncomeFunction = () => {
    //       adjustData[0].actual[0].monthContributions.map((income) =>
    //         totalIncomeArray.push(income.amount)
    //       );
     
    //     };
    //     totalIncomeFunction();
      
    
    //     const totalExpenseFunction = () => {
    //       adjustData[0].actual[0].monthExpenses.housingExpense.map((expense) =>
    //       totalExpensesArray.push(expense.amount)
    //       );
    //       adjustData[0].actual[0].monthExpenses.groceryExpense.map((expense) =>
    //       totalExpensesArray.push(expense.amount)
    //       );
    //       adjustData[0].actual[0].monthExpenses.discretionaryExpense.map((expense) =>
    //       totalExpensesArray.push(expense.amount)
    //       );
    //       adjustData[0].actual[0].monthExpenses.retirementSavings.map((expense) =>
    //       totalExpensesArray.push(expense.amount)
    //       );
    //       adjustData[0].actual[0].monthExpenses.collegeSavings.map((expense) =>
    //       totalExpensesArray.push(expense.amount)
    //       );
    //       adjustData[0].actual[0].monthExpenses.otherExpense.map((expense) =>
    //       totalExpensesArray.push(expense.amount)
    //       );
      
    //     };
    //     totalExpenseFunction();
       
    
    //     sumExpenses = totalExpensesArray.reduce((acc,num)=> acc+ num, 0)
    //     sumIncome = totalIncomeArray.reduce((acc,num)=> acc+ num, 0)
     
    
    //     let monthNetAmount = sumIncome - sumExpenses;
    //     console.table({monthNetAmount, sumExpenses, sumIncome, totalIncomeArray, totalExpensesArray})
    //   };
}

export default Calculate;