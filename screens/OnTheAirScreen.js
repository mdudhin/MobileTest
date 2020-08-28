import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getOnTheAir} from '../redux/Action/TvAction';
import AllTvShow from '../component/AllTvShow';

export default function OnTheAirScreen({navigation}) {
  const dispatch = useDispatch();
  const showTvState = useSelector((state) => state.tv);
  const [page, setPage] = useState(2);

  useEffect(() => {
    dispatch(getOnTheAir());
  }, [dispatch]);

  const tv = showTvState.onTheAir;
  const loading = showTvState.loadingOnTheAir;

  const handleLoadMore = () => {
    const pagePlus = page + 1;
    setPage(pagePlus);
    dispatch(getOnTheAir(page, tv));
  };

  return (
    <View style={styles.container}>
      <AllTvShow
        showTvState={showTvState.onTheAir}
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
