import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from "./component/Welcome"
import Hello from './component/Hello'
import Message from './component/Message'
import Counter from './component/Counter'
import FunctionClick from './component/FunctionClick'
import ClassClick from './component/ClassClick'
import EventBind from './component/EventBind'
class App extends Component {
  render() {
    return (
      <div className="App">
        <EventBind/>
        <ClassClick/>
        <FunctionClick/>
        <Counter/>
        <Message/>
        <Hello/>
        <Greet name = 'Bruce' heroName = 'BatMan'><p>This is Children props</p></Greet>
        <Greet name = 'Diana' heroName = 'SuperMan'><button>This</button></Greet>
        <Welcome name = 'Bruce' heroName = 'BatMan'/>
        <Welcome name = 'Diana' heroName = 'SuperMan'/>
      </div>
    );
  }
}

export default App;
