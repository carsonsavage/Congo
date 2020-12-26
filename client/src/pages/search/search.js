import React from 'react';
import Header from '../../components/header/header.js';
import Wrapper from '../../components/wrapper/wrapper.js';
import SearchResults from '../../components/search-results/search-results.js';
import Footer from '../../components/footer/footer.js';

function Search(){
    return (
        <>
        <Header />
        <Wrapper>
            <SearchResults />
        </Wrapper>
        <Footer />
        </>
    )
};

export default Search;