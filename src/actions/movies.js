import axios from 'axios'; 
import { API_BASE } from '../config/env';

export const FETCH_MOVİES = "FETCH_MOVİES";
export const FETCH_MOVİES_ERROR = "FETCH_MOVİES_ERROR";

export function fetchMovies() {
    return dispatch => {
        axios.get(`${API_BASE}/movies`)
            .then(result => result.data )
            .then(data => dispatch({
                type: FETCH_MOVİES,
                payload: data.movies
            }))
            .catch(error => dispatch({
                type: FETCH_MOVİES_ERROR,
                payload: error
            }))
    }
}