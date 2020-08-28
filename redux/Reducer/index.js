import {combineReducers} from 'redux';
import {MovieReducer} from './MovieReducer';
import {TvReducer} from './TvReducer';

export default combineReducers({
  movie: MovieReducer,
  tv: TvReducer,
});
