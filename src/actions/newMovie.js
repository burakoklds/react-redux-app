import axios from 'axios'; 
import { API_BASE } from '../config/env';

export const NEW_MOVİE_PENDING = "NEW_MOVİE_PENDING";
export const NEW_MOVİE_FULFILLED = "NEW_MOVİE_FULFILLED";
export const NEW_MOVİE_REJECTED = "NEW_MOVİE_REJECTED";

export function onNewMovieSubmit({title , cover}) {
    return dispatch => {
        dispatch({
            type: "NEW_MOVİE",
            payload:  axios.post(`${API_BASE}/movies` , {
                title,
                cover
            }) 
            .then(result => console.log(result) )
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