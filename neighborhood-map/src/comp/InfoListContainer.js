import React, { Component } from 'react'
import Lists from './Lists'
class InfoListContainer extends Component {

    render() {
        return (
            <div className="info-list-container">
                <Lists
                places = { this.props.places }
                clickHandler = { this.props.clickHandler }
                />
            </div>
        )
    }
}

export default InfoListContainer