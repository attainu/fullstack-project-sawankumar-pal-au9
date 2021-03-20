const category = (state={}, action) => {
    switch(action.type){
        case 'CATEGORIES':
            return { ...state, Categories: action.payload }

        case 'SUB_CATEGORIES':
            return { ...state, SubCategories: action.payload}
        
        default:
            return state
    }
}

export default category;