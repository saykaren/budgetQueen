import TestData from "./SampleData";

export interface monthAmountsProps {
    title: string;
    amount: number;
    monthIN: number;
}

export interface expenseCategoriesProps {
    housingExpense: Array<monthAmountsProps>;
    groceryExpense: Array<monthAmountsProps>;
    discretionaryExpense: Array<monthAmountsProps>;
    retirementSavings: Array<monthAmountsProps>;
    collegeSavings: Array<monthAmountsProps>;
    otherExpense: Array<monthAmountsProps>;
}

export interface expenseContributions {
    monthExpenses: expenseCategoriesProps;
    monthContributions: Array<monthAmountsProps>
    }


export interface TestDataProps {
    monthId: number;
    monthName: string;
    year: number;
    begBalance: number;
    endBalance: number;
    budget: Array<expenseContributions>;
    actual: Array<expenseContributions>;
}

export interface SampleDataArrayProps {
    data: Array<TestDataProps>
}

export default SampleDataArrayProps;