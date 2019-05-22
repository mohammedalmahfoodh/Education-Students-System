import React from 'react';
import './coursePortal.css'
import { NavLink } from 'react-router-dom';

const CoursePortal = () => {
    return (

        <div id="coursePortalContainer" className="row center grey-text text-darken-3 ">
         
                
         

            <div  className="col s4 card-panel hoverable addStudent indigo lighten-3 center ">
                <NavLink to="/course/displayCourse">
                    <img className="coursePortalImage" src={require('../../../Images/career-courses-visual.png')} alt="" />
                    <h5 className="grey-text text-darken-3">Display all courses.</h5>
                </NavLink>
            </div>

            <div className="col s4 card-panel hoverable addCourse indigo lighten-4 center offset-s1">
                <NavLink to='/course/addNewCourse'>

                    <img className="coursePortalImage" src={require('../../../Images/add-icons-free-icons-in-aeon--icon-search-engine--12.png')} alt="" />
                    <h5 className="grey-text text-darken-3">Add new course.</h5>
                </NavLink>
            </div>
                        


        </div>


    )

}
export default CoursePortal 