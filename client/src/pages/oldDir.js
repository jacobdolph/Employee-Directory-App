import React, { Component } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { useStoreContext } from '../utils/GlobalState';
import { SET_CURRENT_EMPLOYEE, ADD_EMPLOYEE, REMOVE_EMPLOYEE } from '../utils/actions';
import EmployeeCard from "../components/EmployeeCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import employees from '../employees.json'
import FilterBar from "../components/FilterBar";
import SortBar from "../components/SortBar";



class oldDir extends Component {

    state = {
        search: '',
        employees,

    };


    handleSort = event => {
        event.preventDefault();

        const sortName = this.state.employees.sort((employeesa, employeesb) => {
            var nameA = employeesa.name, nameB = employeesb.name
            if (nameA < nameB) {
                return (nameA < nameB ? -1 : nameA > nameB ? 1 : 0)
            } else {
                return (nameA > nameB ? -1 : nameA < nameB ? 1 : 0)
            }
        });
        this.setState({ employees: sortName })

    }
    handleSortDepartment = event => {
        event.preventDefault();
        const sortName = this.state.employees.sort((employeesa, employeesb) => {
            var nameA = employeesa.department, nameB = employeesb.department
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        });
        this.setState({ employees: sortName })

    }
    handleSortRole = event => {
        event.preventDefault();
        const sortName = this.state.employees.sort((employeesa, employeesb) => {
            var nameA = employeesa.role, nameB = employeesb.role
            if (nameA < nameB)
                return -1
            if (nameA > nameB)
                return 1
            return 0
        })
        this.setState({ employees: sortName })

    }
    handleClear = event => {
        event.preventDefault();
        this.setState({ employees: employees })
    }
    createDepartmentArray() {
        const departmentsArray = this.state.employees.map(a => a.department);
        this.setState({ departments: departmentsArray })
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value });
    };
    handleFilterSubmit = event => {
        event.preventDefault();
        // Filter this.state.employees for employees with an id not equal to the id being removed

        const employees = this.state.employees.filter(employee => employee.department === this.state.search);
        // Set this.state.employees equal to the new employees array
        this.setState({ employees: employees });
    };

    // Map over this.state.employees and render a FriendCard component for each employee object
    render() {
        return (
            <Wrapper>

                <Title>Employee Directory</Title>
                <FilterBar
                    handleFormSubmit={this.handleFilterSubmit}
                    handleInputChange={this.handleInputChange}
                    Clear={this.handleClear}
                    departments={this.state.employees}
                ></FilterBar>
                <div className='container'>
                    <SortBar
                        handleSort={this.handleSort}
                        handleSortDepartment={this.handleSortDepartment}
                        handleSortRole={this.handleSortRole}
                        handleInputChange={this.handleInputChange}
                        Clear={this.handleClear}
                        employees={this.state.employees}
                    ></SortBar>

                    {this.state.employees.map(employee => (
                        <EmployeeCard
                            id={employee.id}
                            key={employee.id}
                            name={employee.name}
                            role={employee.role}
                            department={employee.department}
                            location={employee.location}
                        />
                    ))}
                </div>

            </Wrapper>
        );
    }
};

export default oldDir;