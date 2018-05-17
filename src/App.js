import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainMap from './components/map'
import MenuBar from './components/menubar'
import Footer from './components/footer'
import { slide as Menu } from 'react-burger-menu'

class App extends Component {
  showSettings(event){
    event.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
          <MenuBar/>
          <header className="App-header">
            <h1 className="App-title">Free Beer</h1>
          </header>
          <div className="container">
          <MainMap/>
          </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
