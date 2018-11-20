import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer'
import MapContainer from "./comp/MapContainer"
import * as DataAPI from './DataAPI';

class App extends Component {
  state = {
    places: [],
    placesOriginal: []
  }

  componentDidMount(){ //based off Udacity 'Render UI with External Data' course
    DataAPI.fetchAllLocations()
      .then((loc) => {
        this.setState( { places: loc } )
        this.setState( { placesOriginal: loc } )
      }).catch((e) => {
        console.log("Error Retrieving Four-Square Data... Reason: " + e)
      })
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
