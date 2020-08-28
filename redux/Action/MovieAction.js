import Axios from 'axios';
import {ToastAndroid} from 'react-native';
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

export const getUpComingMovie = (page, upComingMovie) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_UP_COMING_MOVIE,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_UP_COMING_MOVIE,
          data: page === undefined ? data : [...upComingMovie, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const getNowPlayingMovie = (page, nowPlayingMovie) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_NOW_PLAYING_MOVIE,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=1${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_NOW_PLAYING_MOVIE,
          data: page === undefined ? data : [...nowPlayingMovie, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const getTopRatedMovie = (page, topRatedMovie) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_TOP_RATED_MOVIE,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_TOP_RATED_MOVIE,
          data: page === undefined ? data : [...topRatedMovie, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const getPopularMovie = (page, popularMovie) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_POPULAR_MOVIE,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_POPULAR_MOVIE,
          data: page === undefined ? data : [...popularMovie, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const searchMovie = (page, movie, val) => {
  return async (dispatch) => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&query=${val}&page=${
          page === undefined ? 1 : page
        }&include_adult=false`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_SEARCH_MOVIE,
          data: page === undefined ? data : [...movie, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Fail to get data', ToastAndroid.SHORT);
    }
  };
};
