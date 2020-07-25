import React from 'react';
import {TestDataProps} from './TestDataInterface';
// import expenseContributions from './TestDataInterface';

interface ComparsionDetailsProp {
    title: string;
    object: TestDataProps;
}

const TestSend = ({title, object}: ComparsionDetailsProp)=>{
    
    console.log(object);
    return(
        <div className="budget-income-box">
 
      </div>
    )
}

export default TestSend;