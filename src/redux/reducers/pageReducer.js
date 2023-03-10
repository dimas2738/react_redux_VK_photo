import {SET_YEAR, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL} from "../actions/actionTypes";

let currentYear = new Date().getFullYear()

export const initialState = {
    year: currentYear,
    photos: [],
    isFetching: false,
    error: '',
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return {...state, year: action.payload}
        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true, error: '' }

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false, error: '' }

        case GET_PHOTOS_FAIL:
            return { ...state, error: action.payload.message, isFetching: false }

        default:
            return state
    }
}