import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainMap from './components/map'
import MenuBar from './components/menubar'
import Footer from './components/footer'
import SearchForm from './components/searchform'
import Table from './components/table'

import eventData from './data/events.json'

import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  showSettings(event){
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <div class="App-Logo">
             <h1 className="App-title">Free Beer</h1>
            </div>
          </header>
          <div className="container">
          <MainMap markers={eventData}/>
          <Table eventData={eventData}/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
