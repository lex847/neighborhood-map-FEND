import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


export class GMapContainer extends Component {

    render() { // Cited from: https://www.npmjs.com/package/google-maps-react 11.01.18
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <div id="map" className="g-map">
                   <Map
                        google= { this.props.google }
                        zoom= { 14 } 
                        style={ style }>
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