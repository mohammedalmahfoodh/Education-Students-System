import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import { SE } from 'date-fns/locale/sv'

import "react-datepicker/dist/react-datepicker.css";

class EditCourse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courseName: '',
            startDate: new Date(),
            endDate: new Date(),
            startDateIsSelected: false,
            endDateIsSelected: false,
            courseId: 0
        }
        this.getStartDate = this.getStartDate.bind(this);
        this.getEndDate = this.getEndDate.bind(this);
    }
    getStartDate(date) {
        date.setHours(date.getHours() + 2)

        this.setState({
            startDate: date,
            startDateIsSelected: true

        });
        date = new Date()
    }
    getEndDate(date) {
        date.setHours(date.getHours() + 2)
        this.setState({
            endDate: date,
            endDateIsSelected: true
        })
        console.log(date)
        date = new Date()
    }

    getCourseInfo = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }
    isDisabled() {

        return this.state.startDateIsSelected && this.state.endDateIsSelected ;
    }

    getCourseInfo = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }
    updateCourse = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.put('http://localhost:8080/course/updateCourse', this.state)
            .then(res => console.log(res))
        setTimeout(() => { this.props.history.push('/addedSuccessfully') }, 1000)

    }

    componentDidMount() {

        let id = this.props.match.params.course_id;
        console.log(id);

        axios.get("http://localhost:8080/course/getCourseById?id=" + id)
            .then((respons) => {

                this.setState({
                    
                    courseName: respons.data.courseName,
                    
                    courseId: respons.data.courseId

                });
                console.log(respons)
            })

    }
    render() {
        const studentTemplate = this.state.courseName !== '' ? (<div id="UpdateCourseContainer" className="row container center">
          
          <div className="col s7 card-panel  hoverable center indigo lighten-5">
                    <h6>Enter valid information to update course</h6>
                    <form id="addStudent" onSubmit={this.updateCourse}>
                        <div className="input-field ">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="courseName" type="text" className="validate " value={this.state.courseName}
                                onChange={(this.getCourseInfo)} required minLength="3" />
                            <label htmlFor="courseName">Course Name</label>
                            <span className="helper-text" data-error="wrong must be at least 3 characters" data-success="right"></span>
                        </div>
                        <div className="input-field  ">
                            <label className="labelForDataPicker" htmlFor="datapicker">Start course date</label>
                            <DatePicker id="datapicker"

                                selected={this.state.startDate}

                                onChange={this.getStartDate}
                                dateFormat="yyyy-MM-dd"
                                locale={SE}
                            />
                        </div>

                        <div className="input-field">
                            <label className="labelForDataPicker" htmlFor="datapickerEndCourse">End course date</label>
                            <DatePicker id="datapickerEndCourse"

                                selected={this.state.endDate}

                                onChange={this.getEndDate}
                                dateFormat="yyyy-MM-dd"
                                locale={SE}
                            />
                        </div>


                        <div className="center">
                         <span style={{visibility: this.isDisabled() ? 'visible' : 'hidden' }}
                          className='notReady green-text text-green darken-2'>Ready to create course</span>
                         </div> 
                        <button className="btn waves-effect waves-light light-blue accent-4"
                            type="submit" name="action" disabled={!this.isDisabled()}>Create course
                              <i className="material-icons right">send</i>
                        </button>
                        <div className="center">
                         <span style={{visibility: !this.isDisabled() ? 'visible' : 'hidden' }}
                          className='notReady pink-text text-darken-3'>Give all information to create course</span>
                         </div> 
                         

                    </form>

                </div>
            

        </div>) :
            (<div>
                <h4>No course yet</h4>
            </div>)

        return (
            <div>
                {studentTemplate}

                <NavLink to={'/student/DisplayStudents'} id="refreshs"> <i className="large material-icons back ">arrow_back</i></NavLink>
            </div >

        )
    }

}
export default EditCourse