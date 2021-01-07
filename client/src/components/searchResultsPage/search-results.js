import React, { useContext, useEffect, useState } from "react";
import "./search-results.css";
import SearchCards from "./search-cards/search-cards.js";
import SearchContext from "../../util/searchContext.js";
import { Card, Row, Col } from "react-bootstrap";

function SearchResults() {
    const { searchState } = useContext(SearchContext);
    const [loadProducts, setLoadProducts] = useState(false);

    useEffect(() => {
        if (searchState.filtered_results.length > 0) {
            setLoadProducts(true);
        } else {
            setLoadProducts(false);
        }
    }, [searchState.filtered_results]);

    return (
        <div className="search-results">
            <Row>
                {loadProducts ? (
                    <SearchCards />
                ) : (
                    <h2>No products were found</h2>
                )}
            </Row>
        </div>
    );
}

export default SearchResults;
