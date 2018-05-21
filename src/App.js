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
  render() {
    return (
      <div className="App">
          <AppNav/>
          <MainMap markers={eventData}/>
          <AppTable eventData={eventData}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
