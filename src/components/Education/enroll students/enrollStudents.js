import React from 'react';
import Select from 'react-select';

let options = [
  { id: 1, label: 'Java' },
  { id: 2, label: 'C sharp' },
  { value: 'vanilla', label: 'Vanilla' }
];

class EnrollStudents extends React.Component{
    state = {
        selectedOption: null,
      }
      componentDidMount() {
          options[0].id=5;
      }
      handleChange = (selectedOption) => {

        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption.id);
      }
    render(){
        const { selectedOption } = this.state;
        return(
            <div>
            <Select
               value={selectedOption}
                onChange={this.handleChange}
                options={options}  />
            </div>
        )
    }
}
export default EnrollStudents