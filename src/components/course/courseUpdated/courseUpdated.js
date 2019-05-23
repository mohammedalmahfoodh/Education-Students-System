import React from 'react';
import {NavLink}from 'react-router-dom';
const CourseUpdatedSuccessfully = () => {
    return (
       
            <div className="collection center">
                <h5>Course updated successfully</h5>
                <NavLink to={'/course/CoursePortal'} id="refreshs"> 
                <i className="large material-icons back ">arrow_back</i></NavLink>
            </div>
        

    )

}
export default CourseUpdatedSuccessfully 