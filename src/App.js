import React ,{ Component } from 'react';
import NavApp from './components/NavApp';
import Home from './components/Home/Home';

import AddNewStudent from './components/student/addNewStudent/addNewStudent';
import MainStudentPortal from './components/student/mainStudentPortal/mainStudentPortal';
import DisplayStudents from './components/student/displayStudents/displayStudents';
import SearchModify from './components/student/searchAndModify/searchModify';
import StudentCreatedSuccessfully from './components/student/addNewStudent/studentCreatedSuccessfully';

import EditCourse from './components/course/EditCourse/editCourse';
import AddNewCourse from './components/course/addCourse/addNewCourse';
import CoursePortal from './components/course/coursePortal/coursePortal';
import DisplayCourses from './components/course/displayCourse/displayCourse';
import CourseUpdatedSuccessfully from './components/course/courseUpdated/courseUpdated';

import {BrowserRouter,Route,Switch}from 'react-router-dom';
import EditStudent from'./components/student/EditStudent/editStudent'

class App extends Component {
  render(){

    return (
       <BrowserRouter>
      
      <div className="App">
        <header className="App-header">
        <NavApp/>
          
        </header>
        <Switch>
        
        <Route exact path='/' component={Home}/>
        <Route  path='/home' component={Home}/>
        <Route path='/student/studentPortal/AddNewStudent' component={AddNewStudent}/>
        <Route path='/student/studentPortal' component={MainStudentPortal}/>
        <Route path='/student/DisplayStudents' component={DisplayStudents}/>
        <Route path='/student/SearchModify' component={SearchModify}/>
       
       
        <Route path='/course/courseUpdated' component={CourseUpdatedSuccessfully}/>
        <Route path='/course/addNewCourse' component={AddNewCourse}/>
        <Route path='/course/displayCourse' component={DisplayCourses}/>
        <Route path='/course/CoursePortal' component={CoursePortal}/>
        <Route path='/addedSuccessfully' component={StudentCreatedSuccessfully}/>
        <Route path='/about' component={Home}/>  
        <Route path="/student/editStudent/:student_ssn" component={EditStudent}/> 
        <Route path="/course/coursePort/editCourse/:course_id" component={EditCourse}/> 
        </Switch>
       
      </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
