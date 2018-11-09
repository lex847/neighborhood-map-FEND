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
        'lat': 40.820056869904384,
        'lon': -73.95030711337873,
        'street': "160 Convent Ave, New York, NY 10031",
        'fsquareID': "4bcdbfbc8920b7133b2ea0dc"
      },
      {
        'name': "Trinity Church Cemetery and Mausoleum",
        'type': "Cemetary/Mausoleum",
        'lat': 40.83241031722021,
        'lon': -73.94631768901912,
        'street': "770 Riverside Dr, New York, NY 10032",
        'fsquareID': "4c8fc549590ab1f754cbe17d"
      },
      {
        'name': "Hamilton's Bakery",
        'type': "Bakery",
        'lat': 40.827370,
        'lon': -73.949250,
        'street': "3570 Broadway, New York, NY 10031",
        'fsquareID': "572e30ddcd104595c82ca52e"
      },
      {
        'name': "Morris-Jumel Mansion",
        'type': "Historical Landmark",
        'lat': 40.834450,
        'lon': -73.938560,
        'street': "65 Jumel Terrace, New York, NY 10032",
        'fsquareID': "4b69934ef964a520fea72be3"
      },
      {
        'name': "Texas Chicken & Burgers",
        'type': "Fast Food Restaurant",
        'lat': 40.82486414631794,
        'lon': -73.95150679467686,
        'street': "3486 Broadway, New York, NY 10031",
        'fsquareID': "55a15550498e4dc36c4845c3"
      }
    ],
    markers: 0,
    defaultLatLon: {},
    mapZoom: {},

  }

  markerHandleClickEvent = (event, latlong, index) => {
    this.setState ({
      markers: index,
      defaultLatLon: latlong //centers map after click event.. fancy huh?
    })
  }

  infoWindowClose = (event) => { //resets state values 
    this.setState({
      markers: -1,
      //defaultLatLon: ,
      //mapZoom: 
    })
  }

  render() {
    return (
      <div className="App">
        <InfoListContainer
          listItemClick = { this.markerHandleClickEvent }
          places = { this.state.places }
        />
        <MapContainer
          markerClick = { this.markerHandleClickEvent }
          places={ this.state.places }  
        />
      </div>
    );
  }
}

export default App;
