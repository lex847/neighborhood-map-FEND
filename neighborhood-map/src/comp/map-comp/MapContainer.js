import React, { Component } from 'react'
import GMap from './GMap'

class MapContainer extends Component {

    render() {
        return (
            <div className="map-container">
                <GMap/>
            </div>
        )
    }
}

export default MapContainer