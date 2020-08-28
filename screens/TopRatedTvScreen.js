import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getTopRatedTv} from '../redux/Action/TvAction';
import AllTvShow from '../component/AllTvShow';

export default function TopRatedTvScreen({navigation}) {
  const dispatch = useDispatch();
  const showTvState = useSelector((state) => state.tv);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(getTopRatedTv());
  }, [dispatch]);

  const tv = showTvState.topRatedTv;
  const loading = showTvState.loadingTopRatedTv;

  const handleLoadMore = () => {
    const pagePlus = page + 1;
    setPage(pagePlus);
    dispatch(getTopRatedTv(page, tv));
  };

  return (
    <View style={styles.container}>
      <AllTvShow
        showTvState={showTvState.topRatedTv}
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
