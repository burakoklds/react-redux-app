import axios from 'axios'; 
import { API_BASE } from '../config/env';

export const FETCH_MOVİES_PENDING = "FETCH_MOVİES_PENDING";
export const FETCH_MOVİES_FULFILLED = "FETCH_MOVİES_FULFILLED";
export const FETCH_MOVİES_REJECTED = "FETCH_MOVİES_REJECTED";

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVİES",
            payload:  axios.get(`${API_BASE}/movies`)
                           .then(result => result.data.movies )
        });
    }
}

// axios.get(`${API_BASE}/movies`)
//             .then(result => result.data )
//             .then(data => dispatch({
//                 type: FETCH_MOVİES,
//                 payload: data.movies
//             }))
//             .catch(error => dispatch({
//                 type: FETCH_MOVİES_ERROR,
//                 payload: error
//             }))