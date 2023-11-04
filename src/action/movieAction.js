import { MOVIE, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from "./types";

export const importMovie = (movieId) => {
    return {
        type: MOVIE,
        payload: movieId,
    };
};
export const addToFavorite = (movieId) => {
    return {
        type: ADD_TO_FAVORITE,
        payload: movieId,
    }
};
export const removeFromFavorite = (movieId) => {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: movieId,
    }
};
export const addToWatchList = (movieId) => {
    return {
        type: ADD_TO_WATCHLIST,
        payload: movieId,
    }
};
export const removeFromWatchList = (movieId) => {
    return {
        type: REMOVE_FROM_WATCHLIST,
        payload: movieId,
    }
};