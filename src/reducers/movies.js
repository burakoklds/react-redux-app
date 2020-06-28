import { FETCH_MOVİES , FETCH_MOVİES_ERROR } from '../actions/movies';

const initialState = {
    movies: []
};

export  default (state = initialState , action) => {
    switch (action.type){
        case FETCH_MOVİES:
            return {
                ...state,
                movies: action.payload
            };   
        case FETCH_MOVİES_ERROR:
            return {
                ...state,
                error: action.payload
            };  
        default:
            return state;
    }
}