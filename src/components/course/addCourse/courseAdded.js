import React from 'react';
import {NavLink}from 'react-router-dom';
const CourseAddedSuccessfully = () => {
    return (
       
            <div className="collection center">
                <h5>Course Added successfully</h5>
                <NavLink to={'/course/CoursePortal'} id="refreshs"> 
                <i className="large material-icons back ">arrow_back</i></NavLink>
            </div>
        

    )

}
export default CourseAddedSuccessfully 