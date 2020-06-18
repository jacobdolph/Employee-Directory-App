import React, { createContext, useReducer, useContext } from 'react';
import {
    SET_CURRENT_EMPLOYEE,
    REMOVE_EMPLOYEE,
    UPDATE_EMPLOYEES,
    ADD_EMPLOYEE,
    LOADING

} from './actions';


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_EMPLOYEE:
            return {
                ...state,
                currentEmployee: action.empoyee,
                loading: false
            };
        case UPDATE_EMPLOYEES:
            return {
                ...state,
                employees: [action.employees],
                loading: false
            };
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [action.empoyee, ...action.employees],
                loading: false
            };
        case REMOVE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter((employee) => {
                    return employee._id !== action._id;
                })
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};


const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        employees: [],
        currentEmployee: {
            _id: 0,
            first_name: '',
            last_name: '',
            start_day: '',
            createdAt: '',
            updatedAt: '',
            employeeRoleId: 0,
            teamId: null,
            employee_role: {
                _id: 0,
                role_name: '',
                base_pay: 0,
                createdAt: '',
                updatedAt: '',
                departmentId: 0,
                department: {
                    _id: 0,
                    department_name: '',
                    createdAt: '',
                    updatedAt: ''
                }
            },
            team: null
        },
        loading: false
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
}

export { StoreProvider, useStoreContext };