import React from 'react';
import {NavLink}from 'react-router-dom';
const NavApp = () => {
    
    return (
       
            <nav className="nav-wrapper grey darken-3">
                <div className="container">   
                                 
                <ul className="right">
               <li><NavLink className=" z-depth-2" to="/home">Home</NavLink> </li> 
               <li><NavLink className="z-depth-2" to="/contact">Contact</NavLink> </li>  
               <li><NavLink className="z-depth-2" to="/about">About</NavLink> </li>  
                
                </ul>
                
                </div>

                <div className="container">   
                                 
                <ul className="left">
               <li><NavLink className=" z-depth-2" to="/student/studentPortal">Student</NavLink> </li> 
               <li><NavLink className="z-depth-2" to="/course/CoursePortal">Course</NavLink> </li>  
               <li><NavLink className="z-depth-2" to="/student/studentPortal">Education</NavLink> </li>  
                
                </ul>
                
                </div>
                
            </nav>
        

    )

}
export default NavApp 