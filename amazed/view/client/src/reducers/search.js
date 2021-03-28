const search = (state={}, action) => {
    switch(action.type){
        case 'SEARCH':
            return { ...state, SearchResult: action.payload }

        case 'DETAIL':
            return { ...state, ProductDetails: action.payload }

        case 'REVIEW':
            return { ...state, ProductReviews: action.payload }

        case 'ALL_PRODUCTS':
            return { ...state, AllProducts: action.payload }

        case 'CREATE_PRODUCTS':
            return { ...state, CreateProduct: action.payload }

        case 'DELETE_PRODUCT':
            return { ...state, DeleteProduct: action.payload }
        
        default:
            return state
    }
}

export default search;