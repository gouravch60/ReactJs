import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from './components/Header'
import EmployeePage from './components/EmployeePage'

function App() {
  return (
   <Fragment>
    <Header appTitle='Employee Management System'/>
    <EmployeePage/>
    <Footer footNote="&copy; All Rights are reserved 2023" />
   </Fragment>
  );
}

export default App;
