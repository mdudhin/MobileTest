import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPopularTv} from '../redux/Action/TvAction';
import AllTvShow from '../component/AllTvShow';

export default function PopularTvScreen({navigation}) {
  const dispatch = useDispatch();
  const showTvState = useSelector((state) => state.tv);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(getPopularTv());
  }, [dispatch]);

  const tv = showTvState.popularTv;
  const loading = showTvState.loadingPopularTv;

  const handleLoadMore = () => {
    const pagePlus = page + 1;
    setPage(pagePlus);
    dispatch(getPopularTv(page, tv));
  };

  return (
    <View style={styles.container}>
      <AllTvShow
        showTvState={showTvState.popularTv}
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
