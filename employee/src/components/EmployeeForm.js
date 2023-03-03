import {useState} from "react";
import { useDispatch } from "react-redux";
import { createUnMarkEmpEditableAction } from "../state/empActions";
import { createAddEmpActionThunk,createUpdateEmpActionThunk } from "../state/empActionThunks";

const EmployeeForm =({e})=>{
        const dispatch = useDispatch();

        let [id,setId] = useState(e?e.id:0);
        let [name,setName] = useState(e?e.name:'');
        let [department,setDepartment] = useState(e?e.department:'');
        let [salary,setSalary] = useState(e?e.salary:0);
        let editable = e?e.editable:undefined;
        //this.state = this.props.e? {...this.props.e}: {id:0,name:'',department:'',salary:0};
    
 
    const saveBtnClick = event => {
        let e = {id,name,department,salary};
        
        dispatch(editable?createUpdateEmpActionThunk(e):createAddEmpActionThunk(e))
        if(!editable){
            setId(0);
            setName('');
            setDepartment('');
            setSalary(0);
        }
    }
    
        return (
            <tr>
                <td>
                    <input type="number" value={id} className="form-element"
                    onChange={e=>setId(parseInt(e.target.value))}
                    />
                </td>
                <td>
                    <input type="text" value={name} className="form-element"
                    onChange={e=>setName(e.target.value)}
                    />
                </td>
                <td>
                    <input type="text" value={department} className="form-element"
                    onChange={e=>setDepartment(e.target.value)}
                    />
                </td>
                <td>
                    <input type="text" value={salary} className="form-element"
                    onChange={e=>setSalary(parseInt(e.target.value))}
                    />
                </td>
                <td>
                    <button type="button" 
                    onClick={saveBtnClick}
                    className="btn btn-sm btn-primary me-1">{editable?"Save":"ADD"}</button>
                    {editable && (
                        <button type="button" 
                        onClick={e=>dispatch(createUnMarkEmpEditableAction(id))}
                        className="btn btn-sm btn-primary me-1">CANCEL</button>
                    )}
                </td>
            </tr>
        );
    
}

export default EmployeeForm;