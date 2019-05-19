import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            student: null
        }
    }

    componentDidMount() {

        let id = this.props.match.params.student_id;
        axios.get("http://localhost:8080/student/getById?id=" + id)
            .then((respons) => {

                this.setState({
                    student: respons.data,

                });
                console.log(respons)
            })
            
    }
    render() {
        const studentTemplate=this.state.student ?(<div className="collection container">
          <h5 className="center">Name: <span>{this.state.student.name}</span></h5>
          <h5 className="center">Social security number: <span>{this.state.student.socialSecurityNumber}</span></h5>
          <h5 className="center">Email: <span>{this.state.student.email}</span></h5>
          <h5 className="center">Phone: <span>{this.state.student.phone}</span></h5>
          <h5 className="center">Address: <span>{this.state.student.address}</span></h5>


        </div>):
        (<div>
           <h4>No student yet</h4>
        </div>)

        return (
            <div>
              {studentTemplate}
               
                <NavLink to={'/student/DisplayStudents'} id="refreshs"> <i className="large material-icons back ">arrow_back</i></NavLink>
            </div >

        )
    }


}
export default EditStudent