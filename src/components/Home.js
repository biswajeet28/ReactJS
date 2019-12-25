import React from 'react';
import { DropDown } from '../utils/DropDown';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'PROD'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        let items = [];
        console.log(DropDown);
        DropDown.map((data) => {
            console.log(data);
            items.push(<option 
                    key={data.index}
                    value={data.env}
                >
                    {data.url}
                </option>);
        });
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite flavor:
              <select value={this.state.value} onChange={this.handleChange}>
                {items}
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}
export default Home