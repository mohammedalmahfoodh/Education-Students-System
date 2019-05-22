import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './DisplayCourses.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class DisplayCourses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/course/getAllCourses")
            .then((respons) => {

                this.setState({
                    courses: respons.data
                });
                console.log(this.state.courses)
            })
    }
    deletecourse(id) {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete the course?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('Click Ok');
                        axios.delete("http://localhost:8080/course/deleteCourse?id=" + id)
                            .then((respons) => {
                                console.log(respons);
                                window.location.reload();
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Click Ok')
                }
            ]
        });
    }


    render() {

        const DisplayCoursesTemplate = this.state.courses !== null ? (this.state.courses.map(course => {

            return (


                <tr key={course.courseId}>
                    <td>{course.courseName}</td>
                    <td >{course.startDate}</td>
                    <td>{course.endDate}</td>                    
                    
                  <td>  <NavLink to={"/course/coursePort/editCourse/" + course.courseId} id="refresh"> <i className="material-icons edit">refresh</i></NavLink></td>
                    <td>  <a href="#" onClick={() => this.deletecourse(course.courseId)}><i className="material-icons delete">clear</i> </a></td>
                </tr>



            )
        })) : (<div className="center"> No courses To Show.. </div>);


        return (
            <div className="row container ">
                <h5 className="text-info">All courses Displayed bellow</h5>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Start Date</th>
                            <th scope="col" >End Date</th>
                            
                            <th className="deleteWord"  scope="col">Edit</th>
                            <th scope="col" className="deleteWord"> Delete</th>


                        </tr>

                    </thead>
                    <tbody>
                         {DisplayCoursesTemplate}
                    </tbody>
                </table>


            </div>
        )
    }


}
export default DisplayCourses