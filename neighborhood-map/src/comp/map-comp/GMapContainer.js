import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import Popup from './Popup';

export class GMapContainer extends Component {
    state ={
        markers: [],
        center: {}
    }

    render() {
        const GoogleMapDir = withGoogleMap((props) =>  //https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb 11.6.18
            <GoogleMap
                defaultCenter = { { lat: 40.8250585, lng: -73.9476404 } }
                defaultZoom = { 14 }
            >
                {this.props.places.map(function(place, index){
                return (
                    <Marker
                        name= { place.name }
                        position= { {lat: place.location.lat, lng: place.location.lng} }
                        key= { index }
                        locationId = { place.id }>
                         {/*<InfoWindow  onCloseClick = { (event) => {
                            props.toggleOpen(event, { lat: place.lat, lng: place.lng }, { index })}}>
                           <Popup 
                            name = { place.name} 
                            latlng = { {lat: place.lat, lng: place.lng} }
                            locationId = { place.id }
                           />
                           </InfoWindow>*/}
                    </Marker>    
                )
            })}
            </GoogleMap>
        );
        return (
            <div className='map-container__content'>
                <GoogleMapDir
                    containerElement= { <div style={{ height: '100%', width: '100%' }}/> }
                    mapElement= { <div style={{ height: '100%' }} /> }
                />
            </div>
        );
        
    }
}

export default GMapContainer