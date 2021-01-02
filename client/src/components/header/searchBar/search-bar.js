import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./search-bar.css";
import SearchContext from "../../../util/searchContext";

function SearchBar() {
    const { searchState, handleSearchChange } = useContext(SearchContext);

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
                to={`/search/${searchState.search_query}`}
                role="button"
                className="ui inverted blue button"
            >
                <i className="search icon" />
            </Link>
        </div>
    );
}

export default SearchBar;
