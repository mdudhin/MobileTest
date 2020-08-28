import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Item from './UpComingItem';
import {useDispatch, useSelector} from 'react-redux';
import {getUpComingMovie} from '../redux/Action/MovieAction';
import {Icon} from 'react-native-elements';

export default function UpComing({navigation}) {
  const dispatch = useDispatch();
  const showUpComingMovieState = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getUpComingMovie());
  }, [dispatch]);

  const movie = showUpComingMovieState.upComingMovie;
  const loading = showUpComingMovieState.loadingUpComingMovie;

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.noData}>
          <ActivityIndicator size="large" color="#53C9C2" />
        </View>
      ) : movie.length === 0 ? (
        <View style={styles.noData}>
          <Icon
            name="box-open"
            type="font-awesome-5"
            size={70}
            color="rgba(255, 255, 255, 0.8)"
          />
          <Text style={styles.noDataText}>There is no any data yet !</Text>
        </View>
      ) : (
        <FlatList
          data={movie}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Item item={item} navigation={navigation} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
  noData: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  noDataText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    letterSpacing: 1,
    color: '#F4F4F4',
    marginVertical: 10,
  },
});
