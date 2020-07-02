import { NEW_MOVİE_FULFILLED , NEW_MOVİE_REJECTED , NEW_MOVİE_PENDING } from '../actions/newMovie';

const initialState = {
    fetching: false,
    movies: []
};

export  default (state = initialState , action) => {
    switch (action.type){
        case NEW_MOVİE_PENDING:
            return {
                ...state,
                fetching: true
            }; 
        case NEW_MOVİE_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false
            };   
        case NEW_MOVİE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };  
        default:
            return state;
    }
}