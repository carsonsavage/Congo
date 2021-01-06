import React from 'react';
import './search-results.css';
import SearchCards from './search-cards/search-cards.js';


function SearchResults(){
    return (
        <div className="search-results">
            <SearchCards />
        </div>
    )
};

export default SearchResults;