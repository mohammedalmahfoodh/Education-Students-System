import React from 'react';
import {NavLink}from 'react-router-dom';
const StudentCreatedSuccessfully = () => {
    return (
       
            <div className="collection center">
                <h5>Student saved successfully</h5>
                <NavLink to={'/student/DisplayStudents'} id="refreshs"> 
                <i className="large material-icons back ">arrow_back</i></NavLink>
            </div>
        

    )

}
export default StudentCreatedSuccessfully 