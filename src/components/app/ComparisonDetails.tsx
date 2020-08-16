import React from "react";
import { TestDataProps } from "./TestDataInterface";
import IncomeDetails from "./IncomeDetails";
import ExpenseDetails from "./ExpenseDetails";

interface ComparsionDetailsProp {
  title: string;
  object: TestDataProps;
}

const ComparsionDetails = ({ title, object }: ComparsionDetailsProp) => {
  return (
<>
    <IncomeDetails title='Income' object={object}/>
    <ExpenseDetails title='Expense' object={object}/>
    </>
    
  );
};

export default ComparsionDetails;
