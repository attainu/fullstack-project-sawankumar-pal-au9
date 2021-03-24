const signup = (state={}, action) => {
    switch (action.type) {
        case 'SIGNUP':
            
            return { ...state, signupStatus: action.payload }
        
        case 'SIGNIN':

            return { ...state, signinStatus: action.payload }
        
        case 'USER':
            
            return { ...state, userInfo: action.payload }
    
        case 'GET_ALL_USERS':

            return { ...state, allusers: action.payload }
        
        case 'UPDATE_USER':

            return { ...state, updatedDetails: action.payload }

        default:
            return state
    }

}

export default signup;