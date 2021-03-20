import { combineReducers } from 'redux';
import category from './category';
import search from './search';
import order from './order';
import signup from './signup';


const rootReducer = combineReducers({
    category,
    search,
    order,
    signup
        
});

export default rootReducer;