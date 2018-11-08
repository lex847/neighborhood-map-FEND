import React, { Component } from 'react'
import GMapContainer from './GMapContainer'

class MapContainer extends Component {

    render() {
        return (
            <div className="map-container">
                <GMapContainer
                places= { this.props.places }
                markerClick = { this.props.markerHandleClickEvent }
                />
            </div>
        )
    }
}

export default MapContainer