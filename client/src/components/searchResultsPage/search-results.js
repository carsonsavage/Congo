import React, { useContext, useEffect, useState } from "react";
import "./search-results.css";
import SearchCards from "./search-cards/search-cards.js";
import SearchContext from "../../util/searchContext.js";
import { Row } from "react-bootstrap";
import { Loader, Segment, Header } from "semantic-ui-react";

function SearchResults() {
    const { searchState } = useContext(SearchContext);
    const [loadProducts, setLoadProducts] = useState(false);

    useEffect(() => {
        if (searchState.filtered_results.length > 0) {
            setLoadProducts(true);
        } else if (searchState.filtered_results.length === 0) {
            setLoadProducts("none found");
        } else {
            setLoadProducts(false);
        }
    }, [searchState.filtered_results]);

    return (
        <div className="search-results">
            <Row>
                {loadProducts === "none found" && (
                    <Segment>
                        <Header>Sorry, but no products matched your search criteria. Please search again</Header>
                    </Segment>
                )}
                {loadProducts === true && <SearchCards />}
                {loadProducts === false && (
                    <Loader active size="massive" inline="centered" className="center">
                        Loading results...
                    </Loader>
                )}
            </Row>
        </div>
    );
}

export default SearchResults;
