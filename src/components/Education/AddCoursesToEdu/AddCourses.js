import React, { Component } from 'react'
import './addCourses.css'
import { NavLink } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
class AddCoursesToEducation extends Component {


    constructor(props) {
        super(props);
        this.state = {
            courseId: 0,
            removeCourseButton: true,
            educationDisabled: true,
            courses: [],
            coursesSelected: [],
            selectedOption: null,
            options: [
                { id: 0, label: '' }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.addCourses = this.addCourses.bind(this);
        this.courseIdExists = this.courseIdExists.bind(this)
        this.removeCourseButton=this.removeCourseButton.bind(this)
        this.addAllCoursesToEducation=this.addAllCoursesToEducation.bind(this)
       
    }

    componentDidMount() {
        axios.get("http://localhost:8080/course/getAllCourses")
            .then((respons) => {

                this.setState({
                    courses: respons.data
                });
                console.log(this.state.courses)
            })
        let tempArray = []
        axios.get("http://localhost:8080/education/getNames")
            .then((respons) => {
                for (let [key, value] of Object.entries(respons.data)) {
                    const newObject = { id: key, label: value }

                    tempArray.push(newObject);
                }
                this.setState({
                    options: tempArray
                })
            })
    }
    isDisabled() {

        return this.state.educationDisabled;
    }

    removeCourseButton(event,id) {
        event.preventDefault();
        const tempArray = [...this.state.coursesSelected];
        const newSelectedArray= tempArray.filter(course => course.courseId!==id);
        this.setState({coursesSelected:newSelectedArray})        
    }

    handleChangeEducation = (selectedOption) => {

        this.setState({
            selectedOption,
            educationDisabled: false
        });
        console.log(`Option selected:`, selectedOption.id);
    }

    handleChange(e) {


    }
    courseIdExists(courseId) {

        const exists = this.state.coursesSelected.some(course => course.courseId === courseId);

        return exists;
    }

   

    addCourses(event, course) {
        event.preventDefault();
        if(!this.courseIdExists(course.courseId)){
            let tempArray = [...this.state.coursesSelected, course]
        
            this.setState({
                
                coursesSelected: tempArray
            })
        }
        
       
    }
    coursesSelected(){
        return this.state.coursesSelected.length===0;
    }
    addAllCoursesToEducation(event){
        event.preventDefault();
        let educationId=this.state.selectedOption.id;
        console.log(this.state.coursesSelected)
        axios.post('http://localhost:8080/education/addAllCourses?id='+educationId,this.state.coursesSelected).then((res)=>console.log(res));
        setTimeout(()=>{this.props.history.push('/education/coursesAddeToEducation')},1000) 
    }

    render() {
        const displayCoursesSelected = (this.state.coursesSelected.map((course) => {
            return (
                <div  key={course.courseId}>
                    <h6 className="blue-text text-darken-2">{course.courseName}</h6>
                </div>
            )
        })

        )
        const { selectedOption } = this.state;
        const DisplayCoursesTemplate = this.state.courses !== null ? (this.state.courses.map(course => {

            return (

                <tr key={course.courseId}>
                    <td>{course.courseName}</td>
                    <td >{course.startDate}</td>
                    <td>{course.endDate}</td>

                    <td> <button className="waves-effect waves-light btn" disabled={this.isDisabled()}
                        onClick={(event) => { this.addCourses(event, course) }}>
                        <i className="material-icons prefix">add</i>Add</button>  </td>
                    <td><button onClick={(event)=>{this.removeCourseButton(event,course.courseId)}}
                        style={this.courseIdExists(course.courseId) ? {} : { display: 'none' }}
                        className="waves-effect pink darken-4 btn" >
                        <i className="material-icons prefix">clear</i>Remove</button></td>

                </tr>



            )
        })) : (<div className="center"> No courses To Show.. </div>);

        return (
            <div className=" componentContainer">

                <div className="row">

                    <div className='col s7 ' id="addCoursesContainer">
                        <h5 className="text-info">Choose frome courses bleow to add to the education.</h5>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col" >End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DisplayCoursesTemplate}
                            </tbody>
                        </table>

                    </div>
                    <div id="chooseEducationCont" className="col s4">
                        <h5>Education</h5>
                        <form >
                            <div className="input-field" >
                                <p>Select Education first</p>
                                <Select id="selectEducation"
                                    value={selectedOption}
                                    onChange={this.handleChangeEducation}
                                    options={this.state.options} />

                            </div>

                            <div className="input-field">
                                <h5>Courses selected</h5>
                                {displayCoursesSelected}

                            </div>
                          <button onClick={(event)=>{this.addAllCoursesToEducation(event)}}
                              style={this.coursesSelected()===false ? {} : { display: 'none' }}
                              className="waves-effect blue lighten-1 btn">
                              
                              Add All Courses To Education</button>
                        </form>
                    </div>
                </div>


            </div>
        )
    }






}
export default AddCoursesToEducation

