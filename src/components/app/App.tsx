import React from "react";
import "../styling/App.scss";
import Footer from './Footer';
import BudgetBox from './BudgetBox';
import Menu from './Menu';


const App = () =>{
  return (
  <>
  <Menu/>
  <BudgetBox />
  <Footer />
  </>
  );
}

export default App;
