import {
  GET_AIRING_TODAY,
  GET_ON_THE_AIR,
  GET_TOP_RATED_TV,
  GET_POPULAR_TV,
  GET_SEARCH_TV,
  LOADING_AIRING_TODAY,
  LOADING_ON_THE_AIR,
  LOADING_TOP_RATED_TV,
  LOADING_POPULAR_TV,
} from '../Type/TvType';

const initialState = {
  airingToday: [],
  onTheAir: [],
  topRatedTv: [],
  popularTv: [],
  tv: [],
  loadingAiringToday: false,
  loadingOnTheAir: false,
  loadingTopRatedTv: false,
  loadingPopularTv: false,
};

export const TvReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRING_TODAY:
      return {
        ...state,
        airingToday: action.data,
        loadingAiringToday: false,
      };
    case LOADING_AIRING_TODAY:
      return {
        ...state,
        loadingAiringToday: true,
      };
    case GET_ON_THE_AIR:
      return {
        ...state,
        onTheAir: action.data,
        loadingOnTheAir: false,
      };
    case LOADING_ON_THE_AIR:
      return {
        ...state,
        loadingOnTheAir: true,
      };
    case GET_TOP_RATED_TV:
      return {
        ...state,
        topRatedTv: action.data,
        loadingTopRatedTv: false,
      };
    case LOADING_TOP_RATED_TV:
      return {
        ...state,
        loadingTopRatedTv: true,
      };
    case GET_POPULAR_TV:
      return {
        ...state,
        popularTv: action.data,
        loadingPopularTv: false,
      };
    case LOADING_POPULAR_TV:
      return {
        ...state,
        loadingPopularTv: true,
      };
    case GET_SEARCH_TV:
      return {
        ...state,
        tv: action.data,
      };
    default:
      return state;
  }
};
