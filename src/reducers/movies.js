import { FETCH_MOVİES_FULFILLED , FETCH_MOVİES_REJECTED , FETCH_MOVİES_PENDING } from '../actions/movies';

const initialState = {
    fetching: false,
    movieList: []
};

export  default (state = initialState , action) => {
    switch (action.type){
        case FETCH_MOVİES_PENDING:
            return {
                ...state,
                fetching: true
            }; 
        case FETCH_MOVİES_FULFILLED:
            return {
                ...state,
                movieList: action.payload,
                fetching: false
            };   
        case FETCH_MOVİES_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };  
        default:
            return state;
    }
}