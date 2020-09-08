import React, { useState } from "react";
import TestDataInterface, { SampleDataArrayProps } from "./TestDataInterface";
import SampleData from "./SampleData";
import ComparsionDetails from "./ComparisonDetails";
import Menu from "./Menu";


const BudgetBox = () => {
  const [data, setData] = useState(SampleData);
  const [menu, setMenu] = useState(false);
  const [BeginBalanceState, setBeginBalanceState] = useState(4000);

  const calculate = ()=>{
    let adjustData = data;
    
    let totalExpenses = 0;
    let totalIncomeArray = [];
    ///typescript error below -- maybe put in another component? 
  //  console.log({adjustData});
  //   totalIncome = adjustData[0].actual[0].monthContributions.reduce((income, num)=>(
  //   income.amount + num.amount, 0));
    // adjustData[0].actual[0].monthContributions.map((income, num)=>(
    // totalIncome + income.amount + 1));

    const totalIncomeFunction = ()=>{
      adjustData[0].actual[0].monthContributions.map((income)=>(
        // totalIncome + income.amount
        // console.log(income.amount)
        totalIncomeArray.push(income.amount)
        ))
    }
    totalIncomeFunction();
      // console.log({totalIncomeArray});
    };


  console.log(data);
  return (
    <div className="budgetBox">
      {menu && (
        <section className="inputSection">
          <div onClick={() => setMenu(false)} className="menuOpen">
            &laquo;
          </div>

          <Menu />
        </section>
      )}
      {menu === false && (
        <div onClick={() => setMenu(true)} className="openTab">
          &raquo;
        </div>
      )}
      <div onClick={()=>calculate()} id='refresh'>Refresh</div>
      <h2 className="appTitle">Budget Queen</h2>
      {data &&
        data.map((num, numIndex) => (
          <div key={numIndex} className="monthDetail">
            <h2>{num.monthName}</h2>
            <div className="budget-overall-box">
              <div
                className={
                  num.begBalance >= 0
                    ? "budget-detail positiveBalance"
                    : "budget-detail negativeBalance"
                }
              >
                <b>Beginning Balance ${num.begBalance}</b>
              </div>
            </div>
            <ComparsionDetails title={"Income2"} object={num} />
            <div className="budget-overall-box">
              <div
                className={
                  num.endBalance >= 0
                    ? "budget-detail positiveBalance"
                    : "budget-detail negativeBalance"
                }
              >
                Ending Balance ${num.endBalance}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BudgetBox;
