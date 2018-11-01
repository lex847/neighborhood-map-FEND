import React, { Component } from 'react'
import GoogleApiWrapper from './GMap'

class MapContainer extends Component {

    render() {
        return (
            <div className="map-container">
                <GoogleApiWrapper/>
            </div>
        )
    }
}

export default MapContainer