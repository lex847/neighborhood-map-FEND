import React, { Component } from 'react'
import List from './list-comp/List';
import Location from './info-comp/Location';

class InfoListContainer extends Component {

    render() {
        return (
            <div className="info-list-container">
                <List/>
                <Location/>
            </div>
        )
    }
}

export default InfoListContainer