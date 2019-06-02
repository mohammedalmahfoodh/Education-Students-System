import React from 'react';
import './EducationPortal.css'
import { NavLink } from 'react-router-dom';

const EducationPortal = () => {
    return (

        <div id="EducationPortalContainer" className="center grey-text text-darken-3 ">

            <div className="row">
                <div className="col s3 card-panel hoverable addStudent red lighten-1 center ">
                <h6 className="grey-text text-darken-4">Display all educations.</h6>
                    <NavLink to="/education/displayAllEduactions">
                        <img className="EducationPortalImage" src={require('../../../Images/education/Educator-Workshops.jpg')} alt="" />
                    </NavLink>
                </div>

                <div className="col s3 card-panel hoverable addCourse blue darken-3 center offset-s1">
                    <NavLink to='/education/createEducation'>
                    <h6 className="grey-text text-darken-4">Add new education.</h6>
                        <img className="EducationPortalImage" src={require('../../../Images/education/Add-Book-512.png')} alt="" />
                        
                    </NavLink>
                </div>

            </div>


            <div className="row">
            <div className="col s3 card-panel hoverable addStudent grey lighten-3 center ">
            <h6 className="grey-text text-darken-4">Add courses to education.</h6>
                    <NavLink to="/education/addCoursesToEducation">
                        <img className="EducationPortalImage" src={require('../../../Images/education/Add courses.jpg')} alt="" />
                        
                    </NavLink>
                </div>

             
                <div className="col s3 card-panel hoverable addCourse  indigo accent-1 center offset-s1">
                <h6 className="grey-text text-darken-4">Enroll students.</h6>
                    <NavLink to='/education/createEducation'>

                        <img className="EducationPortalImage" src={require('../../../Images/education/Dual_enrollment2.png')} alt="" />
                       
                    </NavLink>
                </div>

            </div>






        </div>


    )

}
export default EducationPortal 