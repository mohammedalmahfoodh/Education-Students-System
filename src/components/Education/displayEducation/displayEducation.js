import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class DisplayEducations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            educations: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/education/getAll")
            .then((respons) => {

                this.setState({
                    educations: respons.data
                });
                console.log(this.state.educations)
            })
    }
    deletecourse(id) {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete the education?',
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

        const DisplayEducaionsTemplate = this.state.eductions !== null ? (this.state.educations.map(education => {

            return (


                <tr key={education.educationId}>
                    <td>{education.educationName}</td>
                    <td >{education.startDate}</td>
                    <td>{education.endDate}</td>                    
                    
                  <td>  <NavLink to={"/course/coursePort/editCourse/" + education.courseId} id="refresh"> <i className="material-icons edit">refresh</i></NavLink></td>
                    <td>  <a href="#" onClick={() => this.deletecourse(education.courseId)}><i className="material-icons delete">clear</i> </a></td>
                </tr>



            )
        })) : (<div className="center"> No courses To Show.. </div>);


        return (
            <div className="row container componentContainer">
                <h5 className="text-info">All educations Displayed bellow</h5>
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
                         {DisplayEducaionsTemplate}
                    </tbody>
                </table>


            </div>
        )
    }


}
export default DisplayEducations