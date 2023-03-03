import axios from 'axios';

import { createErrorAction,createWaitAction,createRefreshAction } from './empActions';

const apiUrl ="http://localhost:7777/employee";

export const createLoadEmpActionThunk = () => dispatch => {
    dispatch(createWaitAction("please wait while refreshing data"));
    axios.get(apiUrl)
        .then(resp=>dispatch(createRefreshAction(resp.data)))
        .catch(err=>{console.log(err); dispatch(createErrorAction("Failed to load data, Please retry later"));})
};

export const createAddEmpActionThunk = emp => dispatch => {
    dispatch(createWaitAction("please wait while adding the data"));
    axios.post(apiUrl,emp)
        .then(resp=>createLoadEmpActionThunk()(dispatch))
        .catch(err=>{console.log(err); dispatch(createErrorAction("Failed to add data, Please retry later"));})
};

export const createUpdateEmpActionThunk = emp => dispatch => {
    dispatch(createWaitAction("please wait while updating the data"));
    axios.put(apiUrl+"/"+emp.id,emp)
        .then(resp=>createLoadEmpActionThunk()(dispatch))
        .catch(err=>{console.log(err); dispatch(createErrorAction("Failed to add data, Please retry later"));})
};

export const createDeleteEmpActionThunk = id => dispatch => {
    dispatch(createWaitAction("please wait while removing the data"));
    axios.delete(apiUrl+"/"+id)
        .then(resp=>createLoadEmpActionThunk()(dispatch))
        .catch(err=>{console.log(err); dispatch(createErrorAction("Failed to add data, Please retry later"));})
};