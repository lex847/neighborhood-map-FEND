import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer'
import MapContainer from "./comp/MapContainer"
import * as DataAPI from './DataAPI';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <div className="App" role="main">
        <InfoListContainer/>
        <MapContainer/>
      </div>
    )
  }
}

export default App;
