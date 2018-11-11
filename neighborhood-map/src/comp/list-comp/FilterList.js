import React, { Component } from 'react';

class FilterList extends React.Component {

state = {       // lifted from the Udacity React course 11/10/18
    query: '',
    placesSearched: ['test', 'test2', 'test3']
}

updateQuery = (query) => { // lifted from the Udacity React course 11/10/18
    this.setState({
        query: query
    })
    this.originPlaces(query);
}

originPlaces = (query) => {
    if(query){
        if(query === this.state.query){//added check as per Udacity review
            this.setState({ placesSearched: [] })
            } else {
                this.setState({ placesSearched: [query] })
            }
        }
    else{
        this.setState({ placesSearched: [] })
    }
}

render() {
   // let booksSearchedVar = this.state.booksSearched;
   //console.log(this.props);
    return (
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
    )
}
}

export default FilterList