import React, { useContext } from "react";
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

            <button className="ui inverted blue button" onClick={(event)=>{
                event.preventDefault();
                window.location.href=`/search/${searchState.search_query}`
                }}>
                <i className="search icon" />
            </button>
        </div>
    );
}

export default SearchBar;
