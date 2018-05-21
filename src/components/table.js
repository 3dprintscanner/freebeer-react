import React, {Component} from 'react'
import { Row, Col, Table, Grid, Button } from 'react-bootstrap';
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
    <Grid>
            {props.eventData.map(data => (
            <Row>
                <Col sm={3} md={3}><h4>{data.eventName} <small>{new Date(data.startDate).toLocaleTimeString()}</small></h4></Col>
                <Col sm={4} md={4}><p>{data.shortDescription}</p></Col>
                <Col sm={4} md={4}><Button bsStyle="primary" onClick={props.onElementClick.bind(null, data)}>Details</Button></Col>
            </Row>   
            ))}
    </Grid>
  );

class AppTable extends Component{

    render(){
        return <TableWithEvents eventData={this.props.eventData} />
    }
}


export default AppTable;