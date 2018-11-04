import React, { Component } from 'react'
import GoogleApiWrapper from './GMap'

class MapContainer extends Component {

    render() {
        return (
            <div className="map-container">
                <GoogleApiWrapper
                places= { this.props.places }
                />
            </div>
        )
    }
}

export default MapContainer