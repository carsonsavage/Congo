import React from 'react';

const SearchContext = React.createContext({
    search_query: "",
    serach_results: []
});

export default SearchContext;