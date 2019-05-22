import React from 'react';
import './mainStudentPortal.css'
import { NavLink } from 'react-router-dom';

const MainStudentPortal = () => {
    return (

        <div id="MainStudentPortalContainer" className="row center grey-text text-darken-3 ">
         
          <div id="displayStudent" className="row">          
         

            <div  className="col s3 card-panel hoverable addStudent indigo lighten-5 center ">
                <NavLink to="/student/DisplayStudents">
                    <img className="mainPortalImage" src={require('../../../Images/Student/Improving+Measurement+and+Display+of+Student+Behaviors+with+Rick+Kubina+1.jpg')} alt="" />
                    <h5 className="grey-text text-darken-3">Display all students.</h5>
                </NavLink>
            </div>

            <div className="col s3 card-panel hoverable addCourse indigo lighten-4 center offset-s1">
                <NavLink to='/student/studentPortal/AddNewStudent'>

                    <img className="mainPortalImage" src={require('../../../Images/Student/imagesAdd.png')} alt="" />
                    <h5>Add new students.</h5>
                </NavLink>
            </div>




            <div className="col s3 card-panel center hoverable addEducation indigo lighten-3 offset-s1">
            <NavLink to='/student/SearchModify'>
                <img className="mainPortalImage" src={require('../../../Images/Student/UniversalEditButton3.png')} alt="" />
                <h5>Modify students profiles.</h5>
                </NavLink>



            </div>

            </div>


        </div>


    )

}
export default MainStudentPortal 