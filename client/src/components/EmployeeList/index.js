import React, { useEffect } from 'react';
import { List, ListItem } from '../List';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_EMPLOYEE, UPDATE_EMPLOYEES, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function EmployeeList() {
    const [state, dispatch] = useStoreContext();

    const removeEmployee = id => {
        API.deleteEmployee(id)
            .then(() => {
                dispatch({
                    type: REMOVE_EMPLOYEE,
                    _id: id
                });
            })
            .catch(err => console.log(err));
    };

    const getEmployees = () => {
        dispatch({ type: LOADING });
        API.getEmployees()
            .then(results => {
                dispatch({
                    type: UPDATE_EMPLOYEES,
                    employees: results.data
                });
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div>
            <h1>Employee Directory</h1>
            <h3 className='mb-5 mt-5'>Click on an employee to view</h3>
            {state.employees.length ? (
                <List>
                    {state.employees[0].map(employee => {
                        console.log(employee.id)
                    })}
                </List>
            ) : (
                    <h3>There are no Employees</h3>
                )}
        </div>
    )
};

export default EmployeeList;