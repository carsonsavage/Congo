import React, {useContext} from 'react';
import './search-bar.css';
import SearchContext from '../../../util/searchContext';

function SearchBar(){
    const {searchState, setSearchState} = useContext(SearchContext);
    
    return (
        <div className="search-bar">
            <div className="ui input">
                <input name="search" type="text" />
            </div>
        
        <button className="ui inverted blue button"><i className="search icon" /></button>
        </div>
    )
};

export default SearchBar;