import React, { Component } from 'react'
import FilterList from './FilterList'

class List extends Component {

    render() {
        return (
            <div className="list">
                <h1>list</h1>
                <FilterList/>
                
            </div>
        )
    }
}

export default List