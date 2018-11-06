import React, { Component } from 'react'
import GMapContainer from './GMap'

class MapContainer extends Component {

    render() {
        return (
            <div className="map-container">
                <GMapContainer
                places= { this.props.places }
                />
            </div>
        )
    }
}

export default MapContainer