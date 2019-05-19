import React, { Component } from 'react';
import './addNewStudent.css'

class AddNewStudent extends Component {

    constructor(props) {
        super(props)
        this.satate = {
            name: 'meamo',
            socialSecurityNumber: '',
            email: '',
            address: '',
            phone: ''
        }
    }
    getStudentInfo = (e) => {
        this.setState({
           name:e.target.value 
        })
        console.log(this.satate.name)
     }


    render() {

        return (

            <div className="row container AddNewStudentContainer center">

                <div className="col s7 card-panel  hoverable center indigo lighten-5">
                    <h6>Enter valid information to create new student</h6>
                    <form >
                      
                        <div className="input-field  ">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="name" type="text" className="validate " value={this.satate.name}
                              onChange={(e)=>{this.setState({name:e.target.value})}} />
                            <label htmlFor="name">First Name</label>
                            <span className="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                        <div className="input-field  ">
                            <i className="material-icons prefix">assignment_ind</i>
                            <input id="socialSecurityNumber" type="text" className="validate" />
                            <label htmlFor="socialSecurityNumber">Social Security Number </label>
                            <span className="helper-text" data-error="wrong" data-success="right"></span>
                        </div>
                        <div className="input-field  ">

                            <i className="material-icons prefix">details</i>
                            <input id="address" type="text" className="validate" />
                            <label htmlFor="address">Address </label>
                            <span className="helper-text" data-error="wrong" data-success="right"></span>
                        </div>

                        <div className="input-field">
                            <i className="material-icons prefix">email</i>
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                            <span className="email" data-error="wrong" data-success="right"></span>
                        </div>
                        <div className="input-field ">
                            <i className="material-icons prefix">phone</i>
                            <input id="phone" type="tel" className="validate" />
                            <label htmlFor="phone">Telephone</label>
                        </div>

                    </form>
                 
                </div>





            </div>


        )
    }
}
export default AddNewStudent 