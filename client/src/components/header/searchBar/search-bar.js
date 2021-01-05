import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./search-bar.css";
import SearchContext from "../../../util/searchContext";



function SearchBar() {
    const { searchState, handleSearchChange, searchProducts } = useContext(SearchContext);

    function generateSearchQuery() {
        let query = `/search/`;
        if(searchState.search_category){
            query += `category=${searchState.search_category}&`
        };
        if(searchState.search_query){
            query += `query=${searchState.search_query}`
        };
        
        return query;
    }

    return (
        <div className="search-bar">
            <div className="ui input">
                <input
                    name="search"
                    type="text"
                    onChange={handleSearchChange}
                    value={searchState.search_query}
                />
            </div>

            <Link
                to={generateSearchQuery()}
                role="button"
                className="ui inverted blue button"
                onClick={searchProducts}
            >
                <i className="search icon" />
            </Link>
        </div>
    );
}

export default SearchBar;
