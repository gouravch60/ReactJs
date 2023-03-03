
export const MARK_EDIT_EMP = "Mark an item editable";
export const UNMARK_EDIT_EMP = "UnMark an item editable";

export const WAIT = "wait";
export const ERR = "error";
export const REFRESH = "refresh data";


export const createMarkEmpEditableAction = id =>({type:MARK_EDIT_EMP,id});
export const createUnMarkEmpEditableAction = id =>({type:MARK_EDIT_EMP,id});

export const createWaitAction = waitMsg => ({type:WAIT,waitMsg});
export const createErrorAction = errMsg => ({type:ERR,errMsg});
export const createRefreshAction = employee => ({type:REFRESH,employee});