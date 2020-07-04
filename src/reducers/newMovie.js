import {
    NEW_MOVİE_FULFILLED, NEW_MOVİE_REJECTED, NEW_MOVİE_PENDING,
    FETCH_MOVİE_FULFILLED, FETCH_MOVİE_REJECTED, FETCH_MOVİE_PENDING
}
    from '../actions/newMovie';

const initialState = {
    fetching: false,
    movie: {
        fetching: false
    },
    done: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_MOVİE_PENDING:
            return {
                ...state,
                fetching: true
            };
        case NEW_MOVİE_FULFILLED:
            return {
                ...state,
                movies: action.payload,
                fetching: false,
                done: true
            };
        case NEW_MOVİE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false
            };
        // FETCH_MOVİE
        case FETCH_MOVİE_PENDING:
            return {
                ...state,
                movie: {
                    fetching: true
                }
            };
        case FETCH_MOVİE_FULFILLED:
            return {
                ...state,
                movie: {
                    ...action.payload,
                    fetching: false
                }
            };
        case FETCH_MOVİE_REJECTED:
            return {
                ...state,
                movie: {
                    fetching: false
                }
            };
        default:
            return state;
    }
}