import React, { Component } from 'react'
import sortBy from 'sort-by' // lifted from the Udacity React course 11/12/18
import escapeRegExp from 'escape-string-regexp'// lifted from the Udacity React course 11/12/18

class List extends Component {
    state = {       // lifted from the Udacity React course 11/10/18
        query: '',
        placesSearched: []
    }

    inputChange = (query, event) => {
		this.updateQuery(query)
        let result = this.searchQuery(query)
        
		this.props.locationUpdate(result.filteredPlaces, query)
		this.setState( { placesSearched: result.filteredPlaces } )
	}

    updateQuery = (query) => { // lifted from the Udacity React course 11/10/18
        this.setState({
            query: query
        })
        //this.originPlaces(query);
    }
    
    searchQuery = (query) => {
        let filteredPlaces,
            placesImported = false, 
            returnedResults = {},
		    places = this.props.places;
	
            places.length > 0 && places == !null && places == !undefined ? placesImported = true : placesImported = false;
            
            if (query && placesImported) { //
                const match = new RegExp(escapeRegExp(query.trim()), 'i') //*** */

                filteredPlaces = places.filter((place) => match.test((place.name)))
            } else {
				filteredPlaces = places
		    }	

		returnedResults = { placesImported: placesImported , filteredPlaces: filteredPlaces }
        
        return returnedResults
    }

    render() {
        let searchResult = this.searchQuery(this.state.query),
            placesImported = searchResult.placesImported,
            filteredPlaces = searchResult.placesImported;

        let places = this.props.places;
        console.log(places);

        return (
            <div className="list">
                <h1>list</h1>
                <div className="list-places">
                    <div className="list-places__searchbar">
                        <div className="search-books-input-wrapper">
                            <input 
                                className="search-input" 
                                type="text" 
                                aria-label="Search Filter by Name"
                                placeholder="Search by name"
                                value={this.state.query} // lifted from the Udacity React course 11/10/18
                                onChange={(event) => {  //
                                    this.inputChange(event.target.value, event) //
                                }}
                            />
                        </div>
                    </div>
                    <div className="list-places__results"> 
                        <ul className="list-places__results-grid"
                            role="menu"
                            aria-label="List of Places">
                            {places.map(function(placesSearched, index){ //based on Udacity React course 11/10/18
                                return (
                                    <li key={index}>
                                            <p>{placesSearched.name}</p>
                                    </li>
                                )
                                }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default List