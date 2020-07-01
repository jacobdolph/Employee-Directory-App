import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
    return (

        <tbody className="list-overflow-container">{children}</tbody>

    );
}

export function ListItem({ employee }) {
    return (
        <tr scope='row' key={employee.id}>
            <td >{employee.first_name}</td>
            <td >{employee.last_name}</td>
            <td >{employee.employee_role.role_name}</td>
            <td >{employee.employee_role.department.department_name}</td>
        </tr>
    );
}
