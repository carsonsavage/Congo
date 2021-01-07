import React, { useEffect, useContext } from "react";
import Wrapper from "../../components/wrapper/wrapper.js";
import SearchResults from "../../components/searchResultsPage/search-results.js";
import Footer from "../../components/footer/footer.js";
import SearchContext from "../../util/searchContext.js";

function Search(props) {
    const { searchState, searchProducts } = useContext(SearchContext);

    const { params } = props.match;

    useEffect(() => {
        if (searchState.search_category || searchState.search_query) {
            console.log("do nothing");
        } else {
            searchProducts(params.category, params.query);
        }
    }, []);

    return (
        <>
            <Wrapper>
                <SearchResults />
            </Wrapper>
            <Footer />
        </>
    );
}

export default Search;
