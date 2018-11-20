import React, { Component } from 'react'
import Lists from './Lists'
class InfoListContainer extends Component {

    render() {
        return (
            <div className="info-list-container">
                <Lists
                places = { this.props.places }
                />
            </div>
        )
    }
}

export default InfoListContainer