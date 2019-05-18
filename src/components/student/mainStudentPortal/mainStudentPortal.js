import React from 'react';
import './mainStudentPortal.css'
import { NavLink, Link, withRouter } from 'react-router-dom';

const MainStudentPortal = () => {
    return (

        <div className="row container MainStudentPortalContainer center grey-text text-darken-3 ">

            <div className="row container MainStudentPortalContainer center grey-text text-darken-3 ">
                <div className="col s6 card-panel hoverable addStudent indigo lighten-5 center">
                    <NavLink to="/student/DisplayStudents">
                        <img src={require('../../../Images/Student/Improving+Measurement+and+Display+of+Student+Behaviors+with+Rick+Kubina+1.jpg')} alt="" />
                        <h5 className="grey-text text-darken-3">Display all students.</h5>
                    </NavLink>
                </div>

            </div>



            <div className="row container MainStudentPortalContainer center grey-text text-darken-3 ">
                <div className="col s6 card-panel hoverable addCourse indigo lighten-4 center">
                  <img src={require('../../../Images/Student/imagesAdd.png')} alt="" />
                    <h5>Add new students.</h5>
                </div>
            </div>


            <div className="row container MainStudentPortalContainer center grey-text text-darken-3 ">
                <div className="col s6 card-panel center hoverable addEducation indigo lighten-3">
                <img src={require('../../../Images/Student/UniversalEditButton3.png')} alt="" />
                    <h5>Modify students profiles.</h5>
                </div>


            </div>


        </div>


    )

}
export default MainStudentPortal 