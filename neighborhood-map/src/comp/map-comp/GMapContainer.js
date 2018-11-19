import React, { Component } from 'react';
import Markers from './Marker'
/*global google*/
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import { compose, withProps, withStateHandlers, lifecycle } from "recompose"; // https://tomchentw.github.io/react-google-maps/#usage--configuration 11.13.18
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
                        onClick={props.onMarkerClick} 
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
        withStateHandlers(() => ({
            //isOpen: false,
          }), {
            /*onToggleOpen: ({ isOpen }) => () => ({
              isOpen: !isOpen,
            })*/
          }),
        withScriptjs,
        withGoogleMap
      )((props) =>
      <GoogleMap
        defaultZoom={ 15 }
        defaultCenter={{ lat: 40.8250585, lng: -73.9476404 }}
        >{console.log(props.passedProps)}
        {props.isMarkerShown && 
            props.passedProps.places.map(function(place, index){
                return (
                    <Markers //https://tomchentw.github.io/react-google-maps/#infowindow 11.13.18
                        name= { place.name }
                        position= { {lat: place.location.lat, lng: place.location.lng} }
                        key= { index }
                        locationId = { place.id }
                        place = { place }
                        //onClick={props.onMarkerClick} 
                        //onClick={ props.passedProps.infoShow }
                    >
                    {/* props.passedProps.showInfoIndex === index && 
                      <InfoWindow
                        onCloseClick={ props.passedProps.infoShow }
                        key= { index }
                        >
                        <div aria-label="Info Window">
                        <h2>{`${place.name}`}</h2>
                        <p>{`${place.location.formattedAddress[0]}`}</p>
                        <p>{`${place.location.formattedAddress[1]}`}</p>
                        <p>powered by FourSquare</p>
                        </div>
                    </InfoWindow>*/}
                    </Markers> 
                    )   
            })}
      </GoogleMap>
    )    
    class GMapContainer extends React.PureComponent {
      state = {
        isMarkerShown: false,
        isOpen: false
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
            passedState= { this.state }
            passedProps= { this.props } //have to pass it throughhhh
            isMarkerShown= { this.state.isMarkerShown }
            onMarkerClick={ this.handleMarkerClick }
          />
        )
      }
    }

export default GMapContainer