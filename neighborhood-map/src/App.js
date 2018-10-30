import React, { Component } from 'react';
import './App.css';
import List from './comp/list-comp/List';
import Location from './comp/info-comp/Location';
import GMap from './comp/map-comp/GMap';


class App extends Component {
  render() {
    return (
      <div className="App">
        <List/>
        <Location/>
        <GMap/>
      </div>
    );
  }
}

export default App;
