import React from 'react';
import { expenseCategoriesProps, TestDataProps, expenseContributions } from './TestDataInterface';

interface ExpenseCategoryDetailsProps {
    title: string;
    object: expenseCategoriesProps;
   
}

const ExpenseCategoryDetails = ({title, object} : ExpenseCategoryDetailsProps) =>{
    const categories = ['housingExpense', 'groceryExpense', 'discretionaryExpense', 'retirementSavings', 'collegeSavings', 'otherExpense']
    
    return(
        <>
        {/* {categories.map((num, index)=>(
            {`{$num}`.title}
        ))} */}
        <div className="expenseCategories"> 
        <h4>{title}</h4>
        {object.housingExpense.map((section, heIndex) => (
          <div
            className="budget-income"
            id={`est${heIndex}`}
            key={heIndex}
          >
            {section.title} ${section.amount}
          </div>
        ))}
      </div>
      </>
    )
}

export default ExpenseCategoryDetails;