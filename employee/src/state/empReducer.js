import { WAIT,ERR,REFRESH,MARK_EDIT_EMP,UNMARK_EDIT_EMP } from "./empActions";

const initState=()=>({
    stock: undefined,
    errMsg: undefined,
    waitMsg: undefined
});

const empReducer = (oldState=initState(),action)=>{
    let {employee,errMsg,waitMsg} = oldState;

    switch(action.type){
        case WAIT:
            waitMsg=action.waitMsg;
            errMsg=undefined;
            break;
        case ERR:
            errMsg = action.errMsg;
            waitMsg = undefined;
            break;
        case REFRESH:
            employee = [...action.employee];
            errMsg = undefined;
            waitMsg = undefined;
            break;
        case MARK_EDIT_EMP:
            employee = employee.map(emp => emp.id != action.id ? emp : { ...emp, editable: true });
            break;
        case UNMARK_EDIT_EMP:
            employee = employee.map(emp => emp.id != action.id ? emp : { ...emp, editable: undefined });
            break;
    }
    return {employee,errMsg,waitMsg};
};

export default empReducer;