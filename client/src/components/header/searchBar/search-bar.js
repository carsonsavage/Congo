import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./search-bar.css";
import SearchContext from "../../../util/searchContext";

function SearchBar() {
    const history = useHistory();

    const { searchState, handleSearchChange, searchProducts } = useContext(
        SearchContext
    );

    function generateSearchQuery() {
        let query = `/search/C=${searchState.search_category}&Q=${searchState.search_query}`;

        return query;
    }

    function handleSubmit(event) {
        event.preventDefault();
        history.push(generateSearchQuery());
        searchProducts(searchState.search_category, searchState.search_query);
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <div className="ui input">
                    <input
                        name="search"
                        type="text"
                        onChange={handleSearchChange}
                        value={searchState.search_query}
                    />
                </div>

                <Link to={generateSearchQuery()}>
                    <button type="submit" className="ui inverted blue button" onClick={handleSubmit}>
                        <i className="search icon" />
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default SearchBar;
