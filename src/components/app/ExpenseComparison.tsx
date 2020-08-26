import React from 'react';
import { monthAmountsProps} from './TestDataInterface';


interface ExpenseComparisonProps {
    title: string;
    objectActual: Array<monthAmountsProps>;
    objectBudget: Array<monthAmountsProps>;
}

const ExpenseComparison = ({title, objectActual, objectBudget}: ExpenseComparisonProps)=>{
    return(
        <div className="expenseCategories">
     <h4>{title}</h4>
                 {objectActual.map(
              (container, indexContainer) => (
                <>
                  <div className="budget-income">
                    {
                      objectActual[indexContainer].title
                    }{" "}
                    {objectBudget[indexContainer].amount-objectActual[indexContainer].amount}
                  </div>
                </>
              )
            )}
     </div>
    )
}

export default ExpenseComparison;