import React, { Component } from 'react';
import axios from 'axios';
import './displayStudents.css'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
class DisplayStudents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/student/getAllStudents").
            then((respons) => {

                this.setState({
                    students: respons.data
                });
                console.log(this.state.students)
            })
    }
    deleteStudent(id) {
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete the student?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        alert('Click Ok');
                        axios.delete("http://localhost:8080/student/deleteStudent?id="+id).
                        then((respons)=>{
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

        const DisplayStudentsTemplate = this.state.students !== null ? (this.state.students.map(student => {

            return (

                <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.socialSecurityNumber}</td>
                    <td>{student.email}</td>
                    <td >{student.address}</td>
                    <td id="phoneData" className="offset-s1">{student.phone}</td>
                    <a href="#" > <i className="material-icons edit">refresh</i></a>
                    <td>  <a href="#" onClick={() => this.deleteStudent(student.studentId)}><i class="material-icons delete">clear</i> </a></td>
                </tr>



            )
        })) : (<div className="center"> No Students To Show.. </div>);


        return (
            <div className="row container ">
                <td className="text-info">All students Displayed bellow</td>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Social Security Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Address</th>
                            <th scope="col">phone</th>
                            <th id="edit" scope="col">Edit</th>
                            <th scope="col"> Delete</th>


                        </tr>

                    </thead>
                    <tbody>
                        {DisplayStudentsTemplate}
                    </tbody>
                </table>


            </div>
        )
    }


}
export default DisplayStudents