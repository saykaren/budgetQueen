import React from "react";
import { expenseCategoriesProps } from "./TestDataInterface";

interface ExpenseCategoryDetailsProps {
  title: string;
  object: expenseCategoriesProps;
}

const ExpenseCategoryDetails = ({
  title,
  object,
}: ExpenseCategoryDetailsProps) => {
  // const categories = [
  //   "housingExpense",
  //   "groceryExpense",
  //   "discretionaryExpense",
  //   "retirementSavings",
  //   "collegeSavings",
  //   "otherExpense",
  // ];
  const categories = [
    {housingExpense : "housingExpense"},
    {groceryExpense: "groceryExpense"},

  ];

  return (
    <>
      <div className="expenseCategories">
        <h4>{title}</h4>
        {categories.map((category, catIndex) =>
          object["housingExpense"].map((section1, heIndex1) => (
            <div className="budget-income" id={`est${heIndex1}`} key={heIndex1}>
              {section1.title} ${section1.amount} {category}
            </div>
          ))
        )}

        {/* Below is what I am trying to put a variable in the object under category */}
        {categories.map((category, catIndex) =>
          object[category].map((section1, heIndex1) => (
            <div className="budget-income" id={`est${heIndex1}`} key={heIndex1}>
              {section1.title} ${section1.amount} {category}
            </div>
          ))
        )}

        {/* Below is the original without mapping through array of names */}
        {object["housingExpense"].map((section, heIndex) => (
          <div className="budget-income" id={`est${heIndex}`} key={heIndex}>
            {section.title} ${section.amount}
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpenseCategoryDetails;
