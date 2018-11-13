import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { compose, withProps } from "recompose"; // https://tomchentw.github.io/react-google-maps/#usage--configuration 11.13.18
import Popup from './Popup';


/*export class GMapContainer extends Component {
    state ={
        markers: [],
        center: {}
    }

    render() {
        
        console.log("Map: " + places)

        /*const GoogleMapDir = withScriptjs(withGoogleMap((props) =>  //https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb 11.6.18
            <GoogleMap
                props={ props }
                places={ places }
                defaultCenter = { { lat: 40.8250585, lng: -73.9476404 } }
                defaultZoom = { 15 }
            >
            {this.props.places.map(function(place, index){
                return (
                    <Marker //https://tomchentw.github.io/react-google-maps/#infowindow 11.13.18
                        name= { place.name }
                        position= { {lat: place.location.lat, lng: place.location.lng} }
                        key= { index }
                        locationId = { place.id }
                    >
                    {<InfoWindow
                        
                        >
                        <div aria-label="Info Window">
                        <h2>{`${place.name}`}</h2>
                        <p>{`${place.location.formattedAddress[0]}`}</p>
                        <p>{`${place.location.formattedAddress[1]}`}</p>
                        <p>powered by FourSquare</p>
                        </div>
                    </InfoWindow>}
                    </Marker> 
                    )   
            })}
            </GoogleMap>
        ));
        */
       const GoogleMapDir = compose( //https://tomchentw.github.io/react-google-maps/#usage--configuration 11.13.18
        withProps({
          googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBl2AofdiKYqxJE6ktBJJSDUTlvHgo9OrQ",
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: '100%', width: '100%' }}/>,
          mapElement: <div style={{ height: '100%' }} />,
        }),
        withScriptjs,
        withGoogleMap
      )((props) =>
      <GoogleMap
        defaultZoom={ 15 }
        defaultCenter={{ lat: 40.8250585, lng: -73.9476404 }}
      >
        {props.isMarkerShown && <Marker position={{ lat: 40.8250585, lng: -73.9476404 }} onClick={props.onMarkerClick} />}
      </GoogleMap>
    )    
    class GMapContainer extends React.PureComponent {
      state = {
        isMarkerShown: false,
      }
    
      componentDidMount() {
        this.delayedShowMarker()
      }
    
      delayedShowMarker = () => {
        setTimeout(() => {
          this.setState({ isMarkerShown: true })
        }, 3000)
      }
    
      handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
      }
    
      render() {
        return (
          <GoogleMapDir
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
          />
        )
      }
    }

export default GMapContainer