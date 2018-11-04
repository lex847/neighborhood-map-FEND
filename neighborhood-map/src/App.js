import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer'
import MapContainer from './comp/map-comp/MapContainer';

class App extends Component {
  state = {
    places: [
      {
        'name': "The City College of New York",
        'type': "School",
        'lat': 40.820210,
        'lon': -73.950348,
        'street': "160 Convent Ave, New York, NY 10031"
      },
      {
        'name': "Trinity Church Cemetery and Mausoleum",
        'type': "Cemetary/Mausoleum",
        'lat': 40.834370,
        'lon': -73.949120,
        'street': "770 Riverside Dr, New York, NY 10032"
      },
      {
        'name': "Hamilton's Bakery",
        'type': "Bakery",
        'lat': 40.827370,
        'lon': -73.949250,
        'street': "3570 Broadway, New York, NY 10031"
      },
      {
        'name': "Morris-Jumel Mansion",
        'type': "Historical Landmark",
        'lat': 40.834450,
        'lon': -73.938560,
        'street': "65 Jumel Terrace, New York, NY 10032"
      },
      {
        'name': "Hamilton Grange National Memorial",
        'type': "Historical Landmark",
        'lat': 40.823130,
        'lon': -73.950500,
        'street': "414 W 141st St, New York, NY 10031"
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <InfoListContainer/>
        <MapContainer
          places={ this.state.places }  
        />
      </div>
    );
  }
}

export default App;
