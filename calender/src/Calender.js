import React, { Component } from 'react';
import Datetime from 'react-datetime'
import '../node_modules/react-datetime/css/react-datetime.css'
import './App.css'

class Calender extends Component {
  constructor(props){
    super(props);
    this.state = {title: '', time: ''}
  }

  render(){
    return(
      <div>
      <input className = "input" name='title' placeholder='Appointment Title'/>
      <Datetime input={false} open={true} />
      <button className="btn btn-primary btn-lg ">Add A Schedule</button>
    </div>
    )
  }
}

  export default Calender
