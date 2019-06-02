import React from 'react';
import {NavLink}from 'react-router-dom';
const CoursesAddeToEducation = () => {
    return (
       
            <div id="addCoursesContainer" className="collection center">
                <h5>Courses Aded successfully</h5>
                <NavLink to={'/education/educationPortal'} id="refreshs"> 
                <i className="large material-icons back ">arrow_back</i></NavLink>
            </div>
        

    )

}
export default CoursesAddeToEducation 