import React, { Component } from 'react';
import './App.css';
import InfoListContainer from './comp/InfoListContainer'
import MapContainer from "./comp/MapContainer"
import * as DataAPI from './DataAPI';

class App extends Component {
  state = {
    gkey: 'AIzaSyBl2AofdiKYqxJE6ktBJJSDUTlvHgo9OrQ'
    
  }

  initMap() { //https://developers.google.com/maps/documentation/javascript/tutorial 11.20.18
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

  loadGoogleMap(){ //injects  the google map scripts into the index.html by inserting before first 'script'
    let googleScriptElement = this.createGoogleMap();
    let htmlPageScripts = document.getElementsByTagName('script');
    let script = htmlPageScripts[0];

        script.parentNode.insertBefore(googleScriptElement, script)
  }

  createGoogleMap(){
    let mapScript = document.createElement("script");
      mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${this.state.gkey}&callback=initMap`;
      mapScript.async = true;
      mapScript.defer = true;

      return mapScript;
  }

  render() {

    return (
      <div className="App" role="main">
        <InfoListContainer/>
        <MapContainer
        loadGoogleMap={ this.loadGoogleMap }/>
      </div>
    )
  }
}

export default App;
