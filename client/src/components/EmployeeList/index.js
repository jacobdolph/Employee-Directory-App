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
        <div >


            <h1>Employee Directory</h1>
            <h3 className='mb-5 mt-5'>Click on an employee to view</h3>
            <table className="table table-bordered table-striped table-hover">

                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>First</th>
                        <th scope='col'>Last</th>
                        <th scope='col'>Role</th>
                        <th scope='col'>Department</th>
                    </tr>
                </thead>
                {state.employees.length ? (
                    <tbody>

                        {state.employees[0].map(employee => (

                            <ListItem
                                key={employee.id}
                                employee={employee}
                            >
                                {console.log(employee)}
                            </ListItem>

                        ))}
                    </tbody>

                ) : (
                        <tbody>
                            <tr>
                                <td>There are no Employees</td>
                            </tr>
                        </tbody>
                    )}

            </table>
        </div>

    )
};

export default EmployeeList;