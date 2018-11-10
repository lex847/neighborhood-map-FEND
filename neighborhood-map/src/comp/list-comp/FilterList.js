import React, { Component } from 'react';

state = {       // lifted from the Udacity React course 10/10/18
    query: '',
    placesSearched: []
}

updateQuery = (query) => { // lifted from the Udacity React course 10/10/18
    this.setState({
        query: query
    })
    this.pullSearchedPlaces(query);
}

pullSearchedPlaces = (query) => {
if(query){
    BooksAPI.search(query).then((searched) => {
        if(query === this.state.query){//added check as per Udacity review
            if(searched.error){ //any errors still produce an array for .map()
                this.setState({ placesSearched: [] })
            } else {
                this.setState({ placesSearched: searched })
            }
        }
    })
} else{
    this.setState({ placesSearched: [] })
}

}

render() {
   // let booksSearchedVar = this.state.booksSearched;
   console.log(this.props);
    return (
        <div className="search-places">
            <div className="search-places-bar">
                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by name"
                        value={this.state.query} // lifted from the Udacity React course 10/10/18
                        onChange={(event) => {  //
                            this.updateQuery(event.target.value) //
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FilterList