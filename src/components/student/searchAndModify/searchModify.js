import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './SearchModify.css'
class SearchModify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            socialSecurityNumber: '',
            email: '',
            address: '',
            phone: '',
            studentId: 0

        }
    }
    getStudentInfo = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }
    getStudentFromServer = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8080/student/getBySocialSecurity?socialSecurity=" + this.state.socialSecurityNumber)
            .then((respons) => {

                this.setState({
                    student: respons.data,
                    name: respons.data.name,
                    socialSecurityNumber: respons.data.socialSecurityNumber,
                    address: respons.data.address,
                    email: respons.data.email,
                    phone: respons.data.phone,
                    studentId: respons.data.studentId


                });
                console.log(respons)
            })

    }
    updateStudent = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.put('http://localhost:8080/student/updateStudent', this.state)
            .then(res => console.log(res))
        setTimeout(() => { this.props.history.push('/addedSuccessfully') }, 1000)

    }


    render() {
        const studentTemplate = this.state.name !== '' ? (<div id="formContainer" className="row container AddNewStudentContainer center">

            <div className="col s7 card-panel  hoverable center indigo lighten-5">
                <h6>Enter valid information to update the student info</h6>
                <form id="addStudent" onSubmit={this.updateStudent}>

                    <div className="input-field  ">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="name" type="text" className="validate " value={this.state.name}
                            onChange={(this.getStudentInfo)} required minLength="3" />
                        <label htmlFor="name">First Name</label>
                        <span className="helper-text" data-error="wrong must be at least 3 characters" data-success="right"></span>
                    </div>
                    <div className="input-field  ">
                        <i className="material-icons prefix">assignment_ind</i>
                        <input id="socialSecurityNumber" pattern="^(19|20)?[0-9]{2}[- ]?((0[0-9])|(10|11|12))[- ]?(([0-2][0-9])|(3[0-1])|(([7-8][0-9])|(6[1-9])|(9[0-1])))[- ]?[0-9]{4}$"
                            type="text" className="validate" required
                            value={this.state.socialSecurityNumber} onChange={(this.getStudentInfo)} />
                        <label htmlFor="socialSecurityNumber">Social Security Number </label>
                        <span className="helper-text" data-error="wrong must be of pattern ÅÅÅÅMMDD-XXXX,ÅÅÅÅMMDDXXXX or ÅÅMMDDXXXX" data-success="right"></span>
                    </div>
                    <div className="input-field  ">

                        <i className="material-icons prefix">details</i>
                        <input id="address" type="text" className="validate" required minLength="4"
                            value={this.state.address} onChange={(this.getStudentInfo)} />
                        <label htmlFor="address">Address </label>
                        <span className="helper-text" data-error="wrong minimum 4 characters required " data-success="right"></span>
                    </div>

                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            className="validate" required
                            value={this.state.email} onChange={(this.getStudentInfo)} />
                        <label id="emailLabel" htmlFor="email">Email</label>
                        <span className="helper-text" data-error="wrong email must be of pattern xxx@xx.xx" data-success="right"></span>
                    </div>
                    <div className="input-field ">
                        <i className="material-icons prefix">phone</i>
                        <input id="phone" type="tel" className="validate" required pattern='^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$'
                            value={this.state.phone} onChange={(this.getStudentInfo)} />
                        <label htmlFor="phone">Telephone</label>
                        <span className="helper-text" data-error="wrong must be 10 digits" data-success="right"></span>
                    </div>

                    <button className="btn waves-effect waves-light light-blue accent-4" type="submit" name="action">Save changes
                      <i className="material-icons right">send</i>
                    </button>

                </form>

            </div>



        </div>) :
            (<div>
                <h4>No student yet</h4>
            </div>)

        return (
            <div>
                <div className="col s7 card-panel container  hoverable center indigo lighten-5">
                    <h6>Search for a student by providing Social Security Number</h6>

                    <form id="addStudent" onSubmit={this.getStudentFromServer}>
                        <div className="input-field  ">
                            <i className="material-icons prefix">assignment_ind</i>
                            <input id="socialSecurityNumber" pattern="^(19|20)?[0-9]{2}[- ]?((0[0-9])|(10|11|12))[- ]?(([0-2][0-9])|(3[0-1])|(([7-8][0-9])|(6[1-9])|(9[0-1])))[- ]?[0-9]{4}$"
                                type="text" className="validate" required
                                value={this.state.socialSecurityNumber} onChange={(this.getStudentInfo)} />
                            <label htmlFor="socialSecurityNumber">Social Security Number </label>
                            <span className="helper-text" data-error="wrong must be of pattern ÅÅÅÅMMDD-XXXX,ÅÅÅÅMMDDXXXX or ÅÅMMDDXXXX" data-success="right"></span>
                        </div>
                        <button className="btn waves-effect waves-light teal darken-1" type="submit" name="action">Search for student
                      <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
                {studentTemplate}

                <NavLink to={'/student/studentPortal'} id="refreshs"> <i className="large material-icons back ">arrow_back</i></NavLink>
            </div >

        )
    }


}
export default SearchModify