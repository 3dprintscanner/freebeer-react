import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainMap from './components/map'
import MenuBar from './components/menubar'
import Footer from './components/footer'
import SearchForm from './components/searchform'
import AppTable from './components/table'
import AppNav from './components/appnav'

import eventData from './data/events.json'


class App extends Component {
  constructor(props){
    super(props);
    this.setCenter = this.setCenter.bind(this);
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }
  


  handleMarkerClick = (element) => {
    this.setState({
      center: this.state.center,
      selected: element.index
    })
  }
  componentWillMount(){
    this.setState({
      center: { lat: 51.515, lng: -0.1 },
      selected: null
    });
    console.log('Component WILL MOUNT!')
  }

  setCenter = (element) => {
    this.setState({
      center: {lat: element.latitude, lng: element.longitude },
      selected: element.index
    });
  }
 componentDidMount() {
    console.log('Component DID MOUNT!')
 }
 componentWillReceiveProps(newProps) {    
    console.log('Component WILL RECIEVE PROPS!')
 }
 shouldComponentUpdate(newProps, newState) {
    return true;
 }
 componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }
 componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
 }
 componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
 }

  render() {
    return (
      <div className="App">
          <AppNav/>
          <MainMap markers={eventData} center={this.state.center} handleMarkerClick={this.handleMarkerClick}/>
          <AppTable eventData={eventData} setCenter={this.setCenter} selected={this.state.selected} />
          <Footer/>
      </div>
    );
  }
}

export default App;
