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

    for(let mark of window.markers){
      if(loc.id === mark.id){
        let infoWindowContent = ` <div class='infowindow-content'>
                                    <h4>${loc.name}</h4>
                                    <p>${loc.location.formattedAddress[0] ? loc.location.formattedAddress[0] : ''}</p>
                                    <p>${loc.location.formattedAddress[1] ? loc.location.formattedAddress[1] : ''}</p>
                                    <p>powered by FourSquare</p>
                                  </div>`;
        window.infoWindow.setContent(infoWindowContent);
        window.infoWindow.open(window.map, mark);
        this.toggleBounce(mark);
      }
    }
  }

  toggleBounce = (marker) => {  // https://developers.google.com/maps/documentation/javascript/examples/marker-animations 11.21.18
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      setTimeout(function(){ // https://stackoverflow.com/questions/7339200/bounce-a-pin-in-google-maps-once 11.21.18
        marker.setAnimation(null);
      }, 2000)
    }
  }

  inputChange = (query) => {
    this.setState({
      query: query
    });
    if(query){
      this.setState({
        places: this.filteredPlaces(query, this.state.places)
      })
    } else {
      this.setState({
        places: this.state.placesOriginal
      })
    }
  }

  filteredPlaces = (query, places) => {
    return places.filter(place => place.name.toLowerCase().includes(query.toLowerCase()))
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
        { (navigator.onLine) ? (<MapContainer // https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine 11.21.18
          places = { this.state.places }
          clickHandler = { this.clickHandler }
          toggleBounce = { this.toggleBounce }
          />)
         : (
          <div>
            <h1>Google Map is Offline</h1>
          </div>
        ) }
      </div>
    )
  }
}

export default App;
