import React ,{ Component } from 'react';
import NavApp from './components/NavApp';
import Home from './components/Home/Home';
import AddNewStudent from './components/student/addNewStudent/addNewStudent';
import MainStudentPortal from './components/student/mainStudentPortal/mainStudentPortal';
import DisplayStudents from './components/student/displayStudents/displayStudents';
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
        <Route path='/about' component={Home}/>  
        <Route path="/student/editStudent/:student_id" component={EditStudent}/>   
        </Switch>
       
      </div>
      </BrowserRouter>
    );

  }
  
}

export default App;
