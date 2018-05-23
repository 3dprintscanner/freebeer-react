import React, {Component} from 'react'
import { Row, Col, Table, Grid, Button } from 'react-bootstrap';

class TableWithEvents extends Component{

    constructor(props){
        super(props);
        this.onElementClick = this.onElementClick.bind(this);
    }
    componentWillMount(){
        this.setState({
            selected: null
        });
    }

    onElementClick = (element) => {
        this.props.setCenter(element);
    }
    

    getStyle(element){
        if(this.props.selected == element.index){
            return {
                'background-color': 'grey',
                animation: '3s ${keyframes}'
            }
        }else{
         return null;   
        }
    }

    render(){
        return <Grid>
            {this.props.eventData.map(data => (
            <Row id={data._id} style={this.getStyle(data)}>
                <Col sm={3} md={3}><h4>{data.eventName} <small>{new Date(data.startDate).toLocaleTimeString()}</small></h4></Col>
                <Col sm={4} md={4}><p>{data.shortDescription}</p></Col>
                <Col sm={4} md={4}><Button bsStyle="primary" onClick={this.onElementClick.bind(null, data)}>Details</Button></Col>
            </Row>   
            ))}
        </Grid>
    }
}

class AppTable extends Component{

    render(){
        return <TableWithEvents eventData={this.props.eventData} setCenter={this.props.setCenter} selected={this.props.selected} />
    }
}


export default AppTable;