import {
  GET_UP_COMING_MOVIE,
  GET_NOW_PLAYING_MOVIE,
  GET_TOP_RATED_MOVIE,
  GET_POPULAR_MOVIE,
  GET_SEARCH_MOVIE,
  LOADING_UP_COMING_MOVIE,
  LOADING_NOW_PLAYING_MOVIE,
  LOADING_TOP_RATED_MOVIE,
  LOADING_POPULAR_MOVIE,
} from '../Type/MovieType';

const initialState = {
  upComingMovie: [],
  nowPlayingMovie: [],
  topRatedMovie: [],
  popularMovie: [],
  movie: [],
  loadingNowPlayingMovie: false,
  loadingUpComingMovie: false,
  loadingTopRatedMovie: false,
  loadingPopularMovie: false,
};

export const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_UP_COMING_MOVIE:
      return {
        ...state,
        upComingMovie: action.data,
        loadingUpComingMovie: false,
      };
    case LOADING_UP_COMING_MOVIE:
      return {
        ...state,
        loadingUpComingMovie: true,
      };
    case GET_NOW_PLAYING_MOVIE:
      return {
        ...state,
        nowPlayingMovie: action.data,
        loadingNowPlayingMovie: false,
      };
    case LOADING_NOW_PLAYING_MOVIE:
      return {
        ...state,
        loadingUpComingMovie: true,
      };
    case GET_TOP_RATED_MOVIE:
      return {
        ...state,
        topRatedMovie: action.data,
        loadingTopRatedMovie: false,
      };
    case LOADING_TOP_RATED_MOVIE:
      return {
        ...state,
        loadingTopRatedMovie: true,
      };
    case GET_POPULAR_MOVIE:
      return {
        ...state,
        popularMovie: action.data,
        loadingPopularMovie: false,
      };
    case LOADING_POPULAR_MOVIE:
      return {
        ...state,
        loadingPopularMovie: true,
      };
    case GET_SEARCH_MOVIE:
      return {
        ...state,
        movie: action.data,
      };
    default:
      return state;
  }
};
