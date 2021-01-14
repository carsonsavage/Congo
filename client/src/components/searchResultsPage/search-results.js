import React, { useContext, useEffect, useState } from "react";
import "./search-results.css";
import SearchCards from "./search-cards/search-cards.js";
import SearchContext from "../../util/searchContext.js";
import { Row } from "react-bootstrap";
import { Dimmer, Loader } from "semantic-ui-react";

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
                    <Loader active size="massive" inline="centered" className="center">
                        Loading results...
                    </Loader>
                )}
            </Row>
        </div>
    );
}

export default SearchResults;
