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

  clickHandler(loc){
    console.log(window)

    for(let mark of window.markers){
      if(loc.id === mark.id){
        window.infoWindow.open(window.map, mark);
      }
    }
  }

  render() {

    return (
      <div className="App" role="main">
        <InfoListContainer
        places = { this.state.places }
        clickHandler = { this.clickHandler }
        />
        <MapContainer
        places = { this.state.places }
        clickHandler = { this.clickHandler }
        />
      </div>
    )
  }
}

export default App;
