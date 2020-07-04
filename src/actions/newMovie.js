import axios from 'axios'; 
import { API_BASE } from '../config/env';

export const NEW_MOVİE_PENDING = "NEW_MOVİE_PENDING";
export const NEW_MOVİE_FULFILLED = "NEW_MOVİE_FULFILLED";
export const NEW_MOVİE_REJECTED = "NEW_MOVİE_REJECTED";

export const FETCH_MOVİE_PENDING = "FETCH_MOVİE_PENDING";
export const FETCH_MOVİE_FULFILLED = "FETCH_MOVİE_FULFILLED";
export const FETCH_MOVİE_REJECTED = "FETCH_MOVİE_REJECTED";

export const UPDATE_MOVİE_PENDING = "UPDATE_MOVİE_PENDING";
export const UPDATE_MOVİE_FULFILLED = "UPDATE_MOVİE_FULFILLED";
export const UPDATE_MOVİE_REJECTED = "UPDATE_MOVİE_REJECTED";

export function onNewMovieSubmit({title , cover}) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVİE",
            payload:  axios.post(`${API_BASE}/movies` , {
                title,
                cover
            }) 
        });
    }
}

export function onUpdateMovieSubmit({ _id , title , cover}) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVİE",
            payload:  axios.put(`${API_BASE}/movies/${_id}` , {
                title,
                cover
            }) 
        });
    }
}

export function fetchMovie(id) {
    return dispatch => {
        dispatch({
            type: "FETCH_MOVİE",
            payload:  axios.get(`${API_BASE}/movies/${id}`)
                .then(result => result.data.movie) 
            });
    }
}

// axios.get(`${API_BASE}/movies`)
//             .then(result => result.data )
//             .then(data => dispatch({
//                 type: NEW_MOVİE,
//                 payload: data.movies
//             }))
//             .catch(error => dispatch({
//                 type: NEW_MOVİE_ERROR,
//                 payload: error
//             }))