import React, { useState } from "react";
import TestDataInterface, { SampleDataArrayProps } from "./TestDataInterface";
import SampleData from "./SampleData";
import ComparsionDetails from "./ComparisonDetails";
import Menu from "./Menu";
import Calculate from "./Calculate";

const BudgetBox = () => {
  const [data, setData] = useState(SampleData);
  const [menu, setMenu] = useState(false);
  const [BeginBalanceState, setBeginBalanceState] = useState(4000);
 
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

      <Calculate data={data} />
   
      <h2 className="appTitle">Budget Queen</h2>
      {/* <Calculate data={data}/> */}
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
