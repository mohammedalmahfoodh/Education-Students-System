import React from 'react';
import './Home.css'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (

        <div id="homeContainer" className="row container center grey-text text-darken-3 ">

            <div className="col s7 card-panel hoverable addStudent indigo lighten-5 center">
                <NavLink to="/student/studentPortal">
                <img src={require('../../Images/Student/abstract-crowd-of-students.jpg')} alt="" />
                    <h5 className="grey-text text-darken-3">Here you can add and modify students.</h5>
                </NavLink>
            </div>


            

            <div className="col s7 card-panel hoverable addCourse indigo lighten-4 center">
            <NavLink to="/course/CoursePortal">
                <img src={require('../../Images/courses.png')} alt="" />
                <h5>Here you can add and modify courses.</h5>
                </NavLink>
            </div>

            <div className="col s7 card-panel center hoverable addEducation indigo lighten-3">
              <NavLink to="/education/educationPortal">
                 
                <img src={require('../../Images/college-wide.jpg')} alt="" />
                <h5>Here you can create new education.</h5>
                </NavLink>
            </div>

            





        </div>


    )

}
export default Home 