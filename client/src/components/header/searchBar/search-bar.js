import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./search-bar.css";
import SearchContext from "../../../util/searchContext";
import { Form } from "react-bootstrap";

function SearchBar() {
    const history = useHistory();

    const {
        searchState,
        handleSearchChange,
        searchProducts,
        handleCategoryChange,
    } = useContext(SearchContext);

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
                <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="category-select"
                    onChange={handleCategoryChange}
                >
                    <option value="">All</option>
                    <option value="food">Food</option>
                    <option value="electronics">Electronics</option>
                    <option value="furniture">Furniture</option>
                    <option value="baby">Baby</option>
                    <option value="cd's & vinyl">Cd's & Vinyl</option>
                    <option value="video games">Video Games</option>
                </Form.Control>

                <div className="ui input search">
                    <input
                        name="search"
                        type="text"
                        onChange={handleSearchChange}
                        value={searchState.search_query}
                    />
                </div>

                <Link to={generateSearchQuery()}>
                    <button
                        type="submit"
                        className="ui inverted blue button"
                        onClick={handleSubmit}
                    >
                        <i className="search icon" />
                    </button>
                </Link>
            </form>
        </div>
    );
}

export default SearchBar;
