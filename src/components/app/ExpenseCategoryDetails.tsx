import React from "react";
import { expenseCategoriesProps, monthAmountsProps } from "./TestDataInterface";

interface ExpenseCategoryDetailsProps {
  title: string;
  // object: expenseCategoriesProps;
  object: Array<monthAmountsProps>;
}

const ExpenseCategoryDetails = ({
  title,
  object,
}: ExpenseCategoryDetailsProps) => {
  return (
    <>
      <div className="expenseCategories">
        <h4>{title}</h4>

        {object.map((section, sectionIndex) => (
          <div
            className="budget-income"
            id={`est${sectionIndex}`}
            key={sectionIndex}
          >
            {section.title} ${section.amount}
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpenseCategoryDetails;
