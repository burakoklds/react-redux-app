import axios from 'axios'; 
import { API_BASE } from '../config/env';

export const FETCH_MOVİES_PENDING = "FETCH_MOVİES_PENDING";
export const FETCH_MOVİES_FULFILLED = "FETCH_MOVİES_FULFILLED";
export const FETCH_MOVİES_REJECTED = "FETCH_MOVİES_REJECTED";

export const DELETE_MOVİE_PENDING = "DELETE_MOVİE_PENDING";
export const DELETE_MOVİE_FULFILLED = "DELETE_MOVİE_FULFILLED";
export const DELETE_MOVİE_REJECTED = "DELETE_MOVİE_REJECTED";

export function fetchMovies() {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVİES",
            payload:  axios.get(`${API_BASE}/movies`)
                           .then(result => result.data.movies )
        });
    }
}

export function deleteMovie(id) {
    return dispatch => {
        dispatch({
            type: "DELETE_MOVİE",
            payload:  axios.delete(`${API_BASE}/movies/${id}`)
                .then(result => Object.assign({} , result , { id }))
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