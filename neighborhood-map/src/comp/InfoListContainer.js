import React, { Component } from 'react'
import Lists from './Lists'
class InfoListContainer extends Component {

    render() {
        return (
            <div className="info-list-container">
                <Lists
                places = { this.props.places }
                clickHandler = { this.props.clickHandler }
                queryState = { this.props.query }
                inputChange = { this.props.inputChange }
                />
            </div>
        )
    }
}

export default InfoListContainer