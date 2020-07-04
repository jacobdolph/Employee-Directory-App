import React from "react";
import "./style.css"

function SideNav() {

    return (
        <div className='h-100 d-inline-block w-100 p-3 bg-dark text-light' style={{ marginLeft: '-15px' }}>
            <a href='/'><i className="fas fa-home home"></i></a>
            <br />
            <a href='/' className='links'>Employees</a>
            <br />
            <a href='/' className='links'>Teams</a>
            <br />
            <a href='/' className='links'>Departments</a>
            <br />
        </div>
    )
}

export default SideNav;