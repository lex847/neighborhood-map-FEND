import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer';
import MapContainer from './comp/map-comp/MapContainer';
import * as DataAPI from './DataAPI';

class App extends Component {
  state = {
    places: [],
    placesOriginal: [],

    markers: 0,
    defaultLatLng: { lat: 40.8250585, lng: -73.9476404 },
    updatedLatLng: {},
    zoom: 15,
    zoomDefault: 17,
    //showInfoIndex: -1,
    //selectedColorBlack: true
  }

  /**** App Functions ****/

  componentDidMount(){ //based off Udacity 'Render UI with External Data' course
    DataAPI.fetchAllLocations()
      .then((loc) => {
        this.setState( { places: loc } )
        this.setState( { placesOriginal: loc } )
      }).catch((e) => {
        console.log("Error Retrieving Four-Square Data... Reason: " + e)
      })
  }

  locationUpdate = (query, searchArray) => {
    if(query){
      this.setState( { places: searchArray } ); // updates for the search query
    } else {
      this.setState( { places: this.state.placesOriginal } ) // resets to the default/original searched array
    }
  }

  centerUpdate = (loc) => {
    let centerNew = this.state.defaultLatLng;

      if(loc !== undefined && loc.location !== undefined){
          centerNew = { lat: loc.location.lat, lng: loc.location.lng }
      }
      this.setState(
        { updatedLatLng: centerNew }
      )
  }

  centerReset = () => { //re-centers map view 
    this.setState({ updatedLatLng: this.state.defaultLatLng })
  }

  toggleOpen = (event, latlng, index) => {
    this.setState({
      zoom: this.state.zoomDefault,
      markerIcon: this.state.defaultMarkerIcon,
      //showInfoIndex: -1
    })
    this.centerReset();
  }

  selectLocation = (event, loc, index) => {
    if(event.key === 'Enter'){
      let updateCenter = { lat: 40.8250585, lng: -73.9476404 }
      
      if (loc.location !== undefined && loc !== undefined) {
          updateCenter = {lat: loc.location.lat, lng: loc.location.lng}            
      }
      this.markerHandleClickEvent(event, this.state.updatedLatLng, index)
    }
  }

  markerHandleClickEvent = (event, latlng, index) => {
    /*color change code */

    this.setState ({
      markers: index,
      defaultLatLng: latlng, //centers map after click event.. fancy huh?
      zoom: 18,
      //showInfoIndex: index.index
      //markerIcon
    })
  }

  itemLocationClicker = (event, loc, index) => {
    let center = this.state.defaultLatLng

    if (loc !== undefined && loc.location !== undefined) {
         center = {lat: loc.location.lat, lng: loc.location.lng}            
    }
    
    this.markerHandleClockEvent(event, center, index)
  }

  infoShow = (indx) => {
    this.setState({
      isOpen : !this.state.isOpen,
      showInfoIndex: indx
    })
  }

  locationColorChange = () => {
    this.setState({selectedColorBlack: !this.state.selectedColorBlack})
  }

  render() {
    return (
      <div className="App" role="main">
        <InfoListContainer
          listItemClick = { this.markerHandleClickEvent }
          locationUpdate = {this.locationUpdate}
          places = { this.state.places }
        />
        { (navigator.onLine) ? (<MapContainer         //boolean logic based on original Udacity project 7 code
          markerClick = { this.markerHandleClickEvent }
          places={ this.state.places }  
          toggleOpen= { this.toggleOpen }
        />)
         : (
          <div>
            <h1>Google Map is Offline</h1>
          </div>
        )
        }
      </div>
    );
  }
}

export default App;
