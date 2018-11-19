import React, { Component } from 'react'
import GMapContainer from './GMapContainer'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
class Markers extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.onToggleOpen = this.onToggleOpen.bind(this);
    }

    onToggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (<Marker //https://stackoverflow.com/questions/50903246/react-google-maps-multiple-info-windows-opening-up 11.19.18
            name= { this.props.name }
            position= { this.props.position }
            key= { this.props.key }
            locationId = { this.props.locationId }
            onClick={ this.onToggleOpen }>
            {this.state.isOpen && 
                <InfoWindow 
                key= { this.props.key }
                onCloseClick={this.onToggleOpen}
                >
                <div aria-label="Info Window">
                    <h2>{`${this.props.place.name}`}</h2>
                    <p>{`${this.props.place.location.formattedAddress[0]}`}</p>
                    <p>{`${this.props.place.location.formattedAddress[1]}`}</p>
                    <p>powered by FourSquare</p>
                </div>
            </InfoWindow>}
        </Marker>)
    }
}

export default Markers