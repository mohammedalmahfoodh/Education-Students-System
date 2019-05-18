import React,{Component} from 'react';
import axios from 'axios';

class DisplayStudents extends Component {

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts").
      then((respons)=>{
          console.log(respons.data)
      })
    }

    //  const DisplayStudentss=props.DisplayStudentss;
    

    /*  const DisplayStudentsTemplate = DisplayStudentss.map(DisplayStudents => {
        if(DisplayStudents.age>30){
       return (
              <div key={DisplayStudents.id}>
                  <h5>Name:{DisplayStudents.name}</h5>
                  <h5>Age:{DisplayStudents.age}</h5>
                  <h5>City:{DisplayStudents.city}</h5>
                 
              </div>
         
          )
        }
          
      })*/
    
    render(){
        return (
            <div className="row container">
                <h5 className="text-info">All students Displayed bellow</h5>
                <table className="table">
                    <thead className="thead-dark">    
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Social Security Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Address</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
    
                    </thead>
                    <tbody>
                       
                    </tbody>
                </table>
    
    
            </div>
        )
    }
   

}
export default DisplayStudents