import React, { Component } from 'react';

class Lists extends Component {

  render() {
    let places = this.props.places;

    return (
      <div className="info-list-container__list">
        <h1 className="app-title">Washington Heights Coffee Shops</h1>
        <div className="info-list-container__searchbar">
          <input 
            type="text" 
            placeholder="Search by name"
            value= { this.props.queryState } // lifted from the Udacity React course 11/10/18
            onChange={(event) => {  //
                this.props.inputChange(event.target.value)}}
          />
        </div>
        <div className="info-list-container__places">
          <ol>
            {places.map((place, index) => (
              <li key={ index }>
                <div className="info-list-container__places-title"><a href='#' onClick={() => this.props.clickHandler(place)}><h2 className="app-list-items">{ place.name }</h2></a></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Lists;