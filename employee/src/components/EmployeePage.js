import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { createLoadEmpActionThunk } from "../state/empActionThunks";

import EmployeeDetails from "./EmployeeDetails";
import EmployeeForm from "./EmployeeForm"



const EmployeePage = ()=>{

    const dispatch = useDispatch();
     
    useEffect(() => dispatch(createLoadEmpActionThunk()), []);

    let employee = useSelector(globalState => globalState.employee);
    let info = useSelector(globalState => globalState.waitMsg);
    let err = useSelector(globalState => globalState.errMsg);
    


        return (
            <section className='container-fluid p-4'>
            <h3>Employee Status</h3>

            {info && <p className='alert alert-info p-2 fw-bold'>{info}</p>}

            {err && <p className='alert alert-danger p-2 fw-bold'>{err}</p>}

            <table className="table table-striped table-border">
                <thead>
                    <tr>
                        <th>Emp Id</th>
                        <th>Emp Name</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <EmployeeForm />
                {   
                    employee && employee.length>0 && employee.map(e=>(
                        e.editable?
                        <EmployeeForm key={e.id} 
                        e={e}
                        
                        /> :
                       <EmployeeDetails key={e.id} 
                       e={e} 
                       
                    />

                    ))
                    
                }
                {(!employee || employee.length ==0) && (
                    <tr>
                        <td colSpan="5" className='text-center fw-bold'>
                            No data present!
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            </section>
        );
   
}

export default EmployeePage