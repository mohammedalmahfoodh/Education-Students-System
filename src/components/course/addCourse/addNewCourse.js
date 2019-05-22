import React, { Component } from 'react';
import './addNewCourse.css'
import axios from 'axios';
import DatePicker from "react-datepicker";
import { SE } from 'date-fns/locale/sv'

import "react-datepicker/dist/react-datepicker.css";

class AddNewCourse extends Component {

    constructor(props) {
        super(props)
        this.state = {
            courseName:'',
            startDate: new Date(),
            startDateIsSelected: false,
            endDateIsSelected: false,
            endDate: new Date()

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
    createCourse = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:8080/course/savecourse',
        {courseName:this.state.courseName,startDate:this.state.startDate,endDate:this.state.endDate} )
            .then(res => console.log(res))
        setTimeout(() => { this.props.history.push('/addedSuccessfully') }, 1000)

    }
    isDisabled() {

        return this.state.startDateIsSelected && this.state.endDateIsSelected ;
    }

    render() {

        return (

            <div id="AddNewCourseContainer" className="row container center">

                <div className="col s7 card-panel  hoverable center indigo lighten-5">
                    <h6>Enter valid information to create a new course</h6>
                    <form id="addStudent" onSubmit={this.createCourse}>
                        <div className="input-field  ">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="courseName" type="text" className="validate " value={this.state.name}
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



            </div>


        )
    }
}
export default AddNewCourse 