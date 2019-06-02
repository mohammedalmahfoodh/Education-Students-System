import React from 'react';
import Select from 'react-select';
import './enrollStudent.css'
import axios from 'axios';



class EnrollStudents extends React.Component {
  constructor(props) {
    super(props)

    this.disableSerchStudent = this.disableSerchStudent.bind(this)
  }
  state = {
    selectedOption: null,
    socialSecurityNumber: '',
    disableSearchStudent:false,
    student: null,
    options: [
      { id: 0, label: '' }
    ]
  }
  /* To iterate over object that i get from my backend {"1":Java,"2":"Cshartp"}
    i used for (let [key, value] of Object.entries(respons.data)) {
  */
  componentDidMount() {
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
        console.log(tempArray);


      })
    this.setState({
      options: [{ value: 'chocolate2', label: 'Chocolate2' },
      { id: 2, label: 'Java' }

      ]
    })
    // console.log(tempArray);
  }
  getStudentInfo = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })

  }
  disableSerchStudent() {
    return this.state.disableSearchStudent;
  }
  getStudentFromServer = (e) => {
    e.preventDefault();
    console.log('hi')
    axios.get("http://localhost:8080/student/getBySocialSecurity?socialSecurity=" + this.state.socialSecurityNumber)
      .then((respons) => {

        this.setState({
          student: respons.data,
          disableSearchStudent:true

        });
        console.log(respons)
      })
  }
  handleChange = (selectedOption) => {

    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption.id);
  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div id="enrollSContainer" className="row container center">

        <div className="col s7 card-panel center  hoverable center indigo lighten-4">
          <form >
            <div className="input-field" >
              <p>Select Education</p>
              <Select id="selectEducation"
                value={selectedOption}
                onChange={this.handleChange}
                options={this.state.options} />
            </div>
            <form id="addStudent" onSubmit={this.getStudentFromServer}>
              <h5>Enter student's Social Security Number</h5>
              <div className="input-field  ">
                <i className="material-icons prefix">assignment_ind</i>
                <input id="socialSecurityNumber" pattern="^(19|20)?[0-9]{2}[- ]?((0[0-9])|(10|11|12))[- ]?(([0-2][0-9])|(3[0-1])|(([7-8][0-9])|(6[1-9])|(9[0-1])))[- ]?[0-9]{4}$"
                  type="text" className="validate" required
                  value={this.state.socialSecurityNumber} onChange={(this.getStudentInfo)} />
                <label htmlFor="socialSecurityNumber">Social Security Number </label>
                <span className="helper-text" data-error="wrong must be of pattern ÅÅÅÅMMDD-XXXX,ÅÅÅÅMMDDXXXX or ÅÅMMDDXXXX" data-success="right"></span>
              </div>
              <button className="btn waves-effect waves-light teal darken-1"
                type="submit" name="action" disabled ={this.disableSerchStudent()}>Search for student
                      <i className="material-icons right">send</i>
              </button>
            </form>

          </form>
        </div>



      </div>
    )
  }
}
export default EnrollStudents