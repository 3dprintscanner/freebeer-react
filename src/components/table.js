import React, {Component} from 'react'
const { compose, withProps, withHandlers } = require("recompose");

const TableWithEvents = compose(
    withProps({
    }),
    withHandlers({
      onElementClick: () => (element) => {
        console.log(element)
      }
    }),
  )(props =>
    <div class="Table-container">
        <table class="table table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {props.eventData.map(data => (
            <tr>
                <th>{data.eventName}</th>
                <th>{new Date(data.startDate).toLocaleTimeString()}</th>
                <th>{data.shortDescription}</th>
            </tr>   
            ))}
        </tbody>
        </table>
    </div>
  );

class Table extends Component{

    render(){
        return <TableWithEvents eventData={this.props.eventData} />
    }
}


export default Table;