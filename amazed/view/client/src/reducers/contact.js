const contact = (state={}, action) => {
    switch(action.type){
        case 'CONTACT':
            return { ...state, contactResult: action.payload }
        
        default:
            return state
    }
}

export default contact;