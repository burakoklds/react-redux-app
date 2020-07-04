import {
    FETCH_MOVİES_FULFILLED, FETCH_MOVİES_REJECTED, FETCH_MOVİES_PENDING,
    DELETE_MOVİE_FULFILLED, DELETE_MOVİE_REJECTED, DELETE_MOVİE_PENDING
}
    from '../actions/movies';

const initialState = {
    fetching: false,
    movieList: []
};

export default (state = initialState, action) => {
    switch (action.type) {
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
        // DELETE_MOVİE
        case DELETE_MOVİE_PENDING:
            return {
                ...state,
            };
        case DELETE_MOVİE_FULFILLED:
            return {
                ...state,
                movieList: state.movieList.filter(item => item._id !== action.payload.id) ,
            };
        case DELETE_MOVİE_REJECTED:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}