import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import SearchBar from 'react-search-bar'
import styles from '../App.css'
import autoBind from 'react-autobind';

import 'react-datepicker/dist/react-datepicker.css';

class SearchForm extends Component{
    constructor (props) {
        super(props)
        this.state = {
          startDate: moment()
        };
        // this.handleChange = this.handleChange.bind(this);
        autoBind(this);
      }
    
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }
      
      handleFormChange(input) {
          this.setState({
              inputValue: input
          })
      }

      handleSelection(value) {
        if (value) {
          console.info(`Selected "${value}"`);
        }
      }
    
      handleSearch(value) {
        if (value) {
          console.info(`Searching "${value}"`);
        }
      }
    
      suggestionRenderer(suggestion, searchTerm) {
        return (
          <span>
            <span>{searchTerm}</span>
            <strong>{suggestion.substr(searchTerm.length)}</strong>
          </span>
        );
      }

      handleClear() {
        this.setState({
          suggestions: []
        });
      }

      render() {
        return(
            <div class="App-searchbar">
                <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                />
                <form>
                    <input type="text" onChange={this.handleFormChanges}/>
                </form>
            </div>
        ) 
      }
}


export default SearchForm;