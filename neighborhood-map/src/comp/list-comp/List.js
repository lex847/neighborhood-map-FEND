import React, { Component } from 'react'
import FilterList from './FilterList'

class List extends Component {

    render() {
        return (
            <div className="list">
                <h1>list</h1>
                <FilterList
                listItemClick = { this.props.markerHandleClickEvent }
                places = { this.props.places }/>
            </div>
        )
    }
}

export default List