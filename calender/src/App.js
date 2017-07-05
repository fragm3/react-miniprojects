import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Calender from './Calender';

class App extends Component {
  render() {
    return (
      <div className="container">
      <Header />
      <Calender />
      <Taskbox />
    </div>
    );
  }
}

export default App;
