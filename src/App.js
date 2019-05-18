import React ,{ Component } from 'react';
import NavApp from './components/NavApp';
import Home from './components/Home/Home';
import AddNewStudent from './components/student/addNewStudent/addNewStudent';
import MainStudentPortal from './components/student/mainStudentPortal/mainStudentPortal';
import DisplayStudents from './components/student/displayStudents/displayStudents';
import {BrowserRouter,Route}from 'react-router-dom';


class App extends Component {
  render(){

    return (
       <BrowserRouter>
      
      <div className="App">
        <header className="App-header">
        <NavApp/>
          
        </header>
        <Route exact path='/' component={Home}/>
        <Route  path='/home' component={Home}/>
        <Route path='/ٍstudent/AddNewStudent' component={AddNewStudent}/>
        <Route path='/student/studentPortal' component={MainStudentPortal}/>
        <Route path='/student/DisplayStudents' component={DisplayStudents}/>
        <Route path='/about' component={Home}/>
      </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
