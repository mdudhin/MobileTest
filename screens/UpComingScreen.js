import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUpComingMovie} from '../redux/Action/MovieAction';
import AllMovies from '../component/AllMovies';

export default function UpComingScreen({navigation}) {
  const dispatch = useDispatch();
  const showMoviesState = useSelector((state) => state.movie);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(getUpComingMovie());
  }, [dispatch]);

  const movie = showMoviesState.upComingMovie;
  const loading = showMoviesState.loadingUpComingMovie;

  const handleLoadMore = () => {
    const pagePlus = page + 1;
    setPage(pagePlus);
    dispatch(getUpComingMovie(page, movie));
  };

  return (
    <View style={styles.container}>
      <AllMovies
        showMoviesState={showMoviesState.upComingMovie}
        handleLoadMore={handleLoadMore}
        navigation={navigation}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingHorizontal: 7,
  },
});
