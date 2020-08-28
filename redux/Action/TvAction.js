import Axios from 'axios';
import {ToastAndroid} from 'react-native';
import {
  GET_AIRING_TODAY,
  GET_ON_THE_AIR,
  GET_POPULAR_TV,
  GET_TOP_RATED_TV,
  GET_SEARCH_TV,
  LOADING_AIRING_TODAY,
  LOADING_ON_THE_AIR,
  LOADING_TOP_RATED_TV,
  LOADING_POPULAR_TV,
} from '../Type/TvType';

export const getAiringToday = (page, airingToday) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_AIRING_TODAY,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_AIRING_TODAY,
          data: page === undefined ? data : [...airingToday, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const getOnTheAir = (page, onTheAir) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_ON_THE_AIR,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/tv/on_the_air?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_ON_THE_AIR,
          data: page === undefined ? data : [...onTheAir, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const getTopRatedTv = (page, topRatedTv) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_TOP_RATED_TV,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_TOP_RATED_TV,
          data: page === undefined ? data : [...topRatedTv, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const getPopularTv = (page, popularTv) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_POPULAR_TV,
      });
      const res = await Axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_POPULAR_TV,
          data: page === undefined ? data : [...popularTv, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Offline', ToastAndroid.SHORT);
    }
  };
};

export const searchTv = (page, tv, val) => {
  return async (dispatch) => {
    try {
      const res = await Axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=2cf7c312eac4c11871f8f47cf7bc9df5&language=en-US&page=${
          page === undefined ? 1 : page
        }&query=${val}&include_adult=false`,
      );
      if (res !== null) {
        const data = res.data.results;
        dispatch({
          type: GET_SEARCH_TV,
          data: page === undefined ? data : [...tv, ...data],
        });
      }
    } catch (e) {
      ToastAndroid.show('Fail to get data', ToastAndroid.SHORT);
    }
  };
};
