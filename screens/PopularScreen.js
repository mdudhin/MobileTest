import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPopularMovie} from '../redux/Action/MovieAction';
import AllMovies from '../component/AllMovies';

export default function PopularScreen({navigation}) {
  const dispatch = useDispatch();
  const showMoviesState = useSelector((state) => state.movie);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(getPopularMovie());
  }, [dispatch]);

  const movie = showMoviesState.popularMovie;
  const loading = showMoviesState.loadingPopularMovie;

  const handleLoadMore = () => {
    const pagePlus = page + 1;
    setPage(pagePlus);
    dispatch(getPopularMovie(page, movie));
  };

  return (
    <View style={styles.container}>
      <AllMovies
        showMoviesState={showMoviesState.popularMovie}
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
