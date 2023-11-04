import {
    ADD_TO_FAVORITE,
    MOVIE, REMOVE_FROM_FAVORITE, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST
} from '../action/types';
const initialState = {
    movies: [],
    favorites: [],
    watchList: []
};
const movieReducer = (state = initialState, action) => {
    switch (action.type) {

        case MOVIE:
            return {
                ...state,
                movies: action.payload
            }
        case ADD_TO_FAVORITE:
            return {
                ...state,
                favorites: (state.favorites || []).concat(action.payload)
            }
        case REMOVE_FROM_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter((movieId) => movieId !== action.payload),
            };
        case ADD_TO_WATCHLIST:
            return {
                ...state,
                watchList: (state.watchList || []).concat(action.payload)
            }
        case REMOVE_FROM_WATCHLIST:
            return {
                ...state,
                watchList: state.watchList.filter((movieId) => movieId !== action.payload),
            };
        default:
            return state;
    }
}
export default movieReducer;