import React, { Component } from 'react'

class ListItems extends Component {

    render() {
        return (
            <div className="list-items-results">
            <ol className="places-grid">
                {this.state.booksSearched.map(booksSearched => {
                    let searchedShelf = 'none';
            
                    this.props.bookList.map(book => (
                        book.id === booksSearched.id ? searchedShelf = book.shelf : ''
                    ));
            
                    return (
                        <li key={booksSearched.id}>
                        <Books
                            innards={booksSearched}
                            moveBook={ this.props.moveBook } 
                            defaultShelf={searchedShelf}
                        />
                    </li>
                    )
                }
                )}
            </ol>
            </div>
        )
    }
}

export default ListItems
