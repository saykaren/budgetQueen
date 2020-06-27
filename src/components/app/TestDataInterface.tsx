import TestData from "./SampleData";

export interface monthAmountsProps {
    title: string,
    amount: number,
    monthIN: number,
}

export interface TestDataProps {
    monthId: number,
    monthName: string,
    begBalance: number,
    endBalance: number,
    monthExpenses?: Array<monthAmountsProps>,
    monthContributions?: Array<monthAmountsProps>,
}

export default TestDataProps;