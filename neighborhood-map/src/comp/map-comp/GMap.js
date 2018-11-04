import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'; //https://github.com/fullstackreact/google-maps-react 11.01.18


export class GMapContainer extends Component {

    render() { // Cited from: https://www.npmjs.com/package/google-maps-react 11.01.18
        const style = {

        }
        return (
            <div id="map" className="g-map">
                   <Map
                        google= { this.props.google }
                        zoom= { 14 } 
                        style={ style }
                        initialCenter={{
                            lat: 40.8250585,
                            lng: -73.9476404
                          }}>
                        <Marker
                            onClick= { this.onMarkerClick }
                            name= { 'Current Location'}
                        />
                        <InfoWindow
                            onClose= { this.onInfoWindowClose } >
                            <div>
                                <h1>{ 'Test'/*this.state.selectedPlace.name */}</h1>
                            </div>
                        </InfoWindow>
                    </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBl2AofdiKYqxJE6ktBJJSDUTlvHgo9OrQ'
})(GMapContainer)