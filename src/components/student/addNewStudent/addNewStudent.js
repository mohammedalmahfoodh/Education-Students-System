import React from 'react';
import './addNewStudent.css'

const AddNewStudent = () => {
    return (

        <div className="row container AddNewStudentContainer center">

            <div className="col s7 card-panel  hoverable center indigo lighten-5">
                <h6>Enter valid information to create new student</h6>
                <form >
                    <div className="input-field  ">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label htmlFor="icon_prefix">First Name</label>
                        <span class="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                    <div className="input-field  ">
                        <i className="material-icons prefix">assignment_ind</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label htmlFor="icon_prefix">Social Security Number </label>
                        <span class="helper-text" data-error="wrong" data-success="right"></span>
                    </div>
                    <div className="input-field  ">

                        <i className="material-icons prefix">details</i>
                        <input id="icon_prefix" type="text" className="validate" />
                        <label for="icon_prefix">Address </label>
                        <span class="helper-text" data-error="wrong" data-success="right"></span>
                    </div>

                    <div class="input-field">
                    <i className="material-icons prefix">email</i>
                       <input id="email" type="email" class="validate"/>
                       <label htmlFor="email">Email</label>
                       <span class="helper-text" data-error="wrong" data-success="right"></span>
                     </div>
                    <div className="input-field ">
                        <i className="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" className="validate" />
                        <label htmlFor="icon_telephone">Telephone</label>
                    </div>

                </form>

            </div>





        </div>


    )

}
export default AddNewStudent 