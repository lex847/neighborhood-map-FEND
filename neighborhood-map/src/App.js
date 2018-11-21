import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer'
import MapContainer from "./comp/MapContainer"
import * as DataAPI from './DataAPI';

class App extends Component {
  state = {
    places: [],
    placesOriginal: [],
    query: ''
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

  clickHandler = (loc) => {
    console.log(window)

    for(let mark of window.markers){
      if(loc.id === mark.id){
        let infoWindowContent = ` <div class='infowindow-content'>
                                    <h4>${loc.name}</h4>
                                    <p>${loc.location.formattedAddress[0] ? loc.location.formattedAddress[0] : ''}</p>
                                    <p>${loc.location.formattedAddress[1] ? loc.location.formattedAddress[1] : ''}</p>
                                    <p>${loc.location.formattedAddress[2] ? loc.location.formattedAddress[2] : ''}</p>
                                    <p>powered by FourSquare</p>
                                  </div>`;
        window.infoWindow.setContent(infoWindowContent);
        window.infoWindow.open(window.map, mark);
      }
    }
  }

  inputChange = (query) => {
    this.setState({
      query: query
    })
  }

  render() {

    return (
      <div className="App" role="main">
        <InfoListContainer
        places = { this.state.places }
        clickHandler = { this.clickHandler }
        queryState = { this.state.query }
        inputChange = { this.inputChange }
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
