import React from 'react';
import Wrapper from '../../components/wrapper/wrapper.js';
import SearchResults from '../../components/searchResultsPage/search-results.js';
import Footer from '../../components/footer/footer.js';

function Search(){
    return (
        <>
        <Wrapper>
            <SearchResults />
        </Wrapper>
        <Footer />
        </>
    )
};

export default Search;