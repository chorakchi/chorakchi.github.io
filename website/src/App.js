import React, { Component } from 'react';
import logo from './logo.svg';
import Footer from './components/Footer'
import HeaderOfPage from './components/HeaderOfPage'
import HeaderMainPage from './components/HeaderMainPage'
import ContentHomePage from './components/ContentHomePage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderOfPage/>
        <HeaderMainPage/>
        <ContentHomePage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
