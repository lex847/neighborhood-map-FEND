import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer'
import MapContainer from './comp/map-comp/MapContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoListContainer/>
        <MapContainer/>
      </div>
    );
  }
}

export default App;
