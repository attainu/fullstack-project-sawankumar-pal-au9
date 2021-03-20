const search = (state={}, action) => {
    switch(action.type){
        case 'SEARCH':
            return { ...state, SearchResult: action.payload }

        case 'DETAIL':
            return { ...state, ProductDetails: action.payload }

        case 'REVIEW':
            return { ...state, ProductReviews: action.payload }
        
        default:
            return state
    }
}

export default search;