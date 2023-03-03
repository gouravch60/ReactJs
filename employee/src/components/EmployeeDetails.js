import { useDispatch } from 'react-redux';
import { createMarkEmpEditableAction } from '../state/empActions';
import { createDeleteEmpActionThunk } from '../state/empActionThunks';

function EmployeeDetails({e}){
    const dispatch = useDispatch();
    return (
    <tr>
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.department}</td>
        <td>{e.salary}</td>
        <td>
        <button type="button" onClick={event=>dispatch(createMarkEmpEditableAction(e.id))} className="btn btn-sm btn-secondary me-1">Edit</button>
        <button type="button" onClick={event => dispatch(createDeleteEmpActionThunk(e.id))} className="btn btn-sm btn-danger me-1">DELETE</button>
        </td>
    </tr>
    )
    
}

export default EmployeeDetails;