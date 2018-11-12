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
        
		this.props.locationUpdate(result.filteredLocations, query)
		this.setState({locationsSearchResult: result.filteredLocations})
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
        return (
            <div className="list">
                <h1>list</h1>
                <div className="list-places">
                    <div className="list-places__searchbar">
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by name"
                                value={this.state.query} // lifted from the Udacity React course 11/10/18
                                onChange={(event) => {  //
                                    this.updateQuery(event.target.value) //
                                }}
                            />
                        </div>
                    </div>
                    <div className="list-places__results"> 
                        <ol className="list-places__results-grid">
                            {this.state.placesSearched.map(function(placesSearched, index){ //based on Udacity React course 11/10/18
                                let searchedShelf = 'none';
                        
                                /*this.props.places.map(place => (
                                    place.id === placesSearched.id ? searchedShelf = book.shelf : ''
                                ));*/
                                    return (
                                        <li key={index}>
                                            <p>{placesSearched}</p>
                                        </li>
                                    )
                                }
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default List