import React from 'react';
import {NavLink}from 'react-router-dom';
const EducationAdded = () => {
    return (
       
            <div id="educationAddedContainer" className="collection center container">
                <h5>Education Added successfully</h5>
                <NavLink to={'/education/educationPortal'} id="refreshs"> 
                <i className="large material-icons back ">arrow_back</i></NavLink>
            </div>
        

    )

}
export default EducationAdded 