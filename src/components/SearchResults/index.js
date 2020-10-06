
import React from "react";
import "./style.css";

function SearchResults(props) {
  return (props.employees.map(employee => (
    <div className="row emp" key={employee.id}>
      <div className="col img-fluid rowentry" >
        <img alt={employee.name} src={employee.image} />
      </div>
      <div className="col entry rowentry">{employee.name}</div>
      <div className="col entry rowentry">{employee.phone}</div>
      <div className="col entry rowentry">{employee.email}</div>
      <div className="col entry rowentry">{employee.dob}</div>
    </div>
  )));
}

export default SearchResults;