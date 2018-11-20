import React, { Component } from 'react';
import * as DataAPI from '../DataAPI';

class Lists extends Component {
  state = {
    
  }

  render() {
    let places = this.props.places;

    return (
      <div className="info-list-container__list">
        <h2>Places</h2>
        <div className="info-list-container__searchbar">
          <input 
            type="text" 
            placeholder="Search by name"
            //value={this.state.query} // lifted from the Udacity React course 11/10/18
            //onChange={(event) => {  //
            //    this.updateQuery(event.target.value) //}}
          />
        </div>
        <div className="info-list-container__places">
          <ol>
            {places.map((place) => (
              <li>{place.name}</li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Lists;