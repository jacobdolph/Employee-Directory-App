import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="row employee-background">

      <div className='col each-section'>
        <p>{props.name}</p>
      </div>
      <div className='col each-section'>
        <p>{props.role}</p>
      </div>
      <div className='col each-section'>
        <p> {props.department}</p>
      </div>
      <div className='col each-section'>
        <p> {props.location}</p>
      </div>


    </div>
  );
}

export default EmployeeCard;
