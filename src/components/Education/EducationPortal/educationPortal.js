import React from 'react';
import './EducationPortal.css'
import { NavLink } from 'react-router-dom';

const EducationPortal = () => {
    return (

        <div id="EducationPortalContainer" className="row center grey-text text-darken-3 ">
         
                
         

            <div  className="col s4 card-panel hoverable addStudent red lighten-1 center ">
                <NavLink to="/course/displayCourse">
                    <img className="EducationPortalImage" src={require('../../../Images/education/Educator-Workshops.jpg')} alt="" />
                    <h5 className="grey-text text-darken-3">Display all educations.</h5>
                </NavLink>
            </div>

            <div className="col s4 card-panel hoverable addCourse blue darken-3 center offset-s1">
                <NavLink to='/education/createEducation'>

                    <img className="EducationPortalImage" src={require('../../../Images/education/Add-Book-512.png')} alt="" />
                    <h5 className="grey-text text-darken-3">Add new education.</h5>
                </NavLink>
            </div>
                        


        </div>


    )

}
export default EducationPortal 