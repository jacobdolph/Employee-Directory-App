import React from "react";
import "./style.css"

function SideNav() {

    return (
        <div className='w-100 p-3 bg-dark text-light position-stickey' style={{ marginLeft: '-15px', height: '1220px' }}>
            <a href='/'><i className="fas fa-home home"></i></a>
            <br />
            <a href='/directory' className='links'>Directory</a>
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