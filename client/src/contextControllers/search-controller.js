import React from "react";

function SearchController() {
    const [searchState, setSearchState] = useState({
        search_query: "",
        search_category: "",
        search_results: [],
        filtered_results: [],
        product_result: {},
        product_categories: [],
    });

    useEffect(() => {
        loadUser();
        API.getDbCategories().then(({ data }) => {
            let categoryArray = data.map((item) => {
                return item.category;
            });
            let uniqueArray = [...new Set(categoryArray)];
            setSearchState({ ...searchState, product_categories: uniqueArray });
        });
    }, []);

    const searchProducts = (category, query) => {
        API.searchProducts(category, query).then(({ data }) => {
            setSearchState({
                ...searchState,
                search_results: data,
                filtered_results: data,
            });
        });
    };

    const lookupProduct = (productId) => {
        API.lookupProduct(productId).then(({ data }) => {
            setSearchState({ ...searchState, product_result: data[0] });
        });
    };

    const handleSearchChange = (event) => {
        setSearchState({ ...searchState, search_query: event.target.value });
    };

    const handleCategoryChange = (event) => {
        setSearchState({ ...searchState, search_category: event.target.value });
    };
}

export default SearchController;
