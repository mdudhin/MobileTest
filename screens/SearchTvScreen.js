import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AllMovies from '../component/AllMovies';
import {Icon} from 'react-native-elements';
import {searchTv} from '../redux/Action/TvAction';
import AllTvShow from '../component/AllTvShow';

export default function SearchTvScreen({navigation}) {
  const dispatch = useDispatch();
  const showTvState = useSelector((state) => state.tv);
  const [page, setPage] = useState(2);
  const [valTv, setValTv] = useState();

  const tv = showTvState.tv;

  const handleLoadMore = () => {
    const pagePlus = page + 1;
    setPage(pagePlus);
    dispatch(searchTv(undefined, undefined, valTv));
  };

  const handleSearch = (val) => {
    setValTv(val);
    setPage(2);
    dispatch(searchTv(undefined, undefined, valTv));
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={(val) => handleSearch(val)}
        />
        <TouchableOpacity>
          <Icon name="search" type="feather" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      {tv.length === 0 ? (
        <View style={styles.noData}>
          <Icon name="box-open" type="font-awesome-5" size={70} color="black" />
          <Text style={styles.noDataText}>There is no any data yet !</Text>
        </View>
      ) : (
        <AllTvShow
          showTvState={showTvState.tv}
          handleLoadMore={handleLoadMore}
          navigation={navigation}
        />
      )}
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
  search: {
    flexDirection: 'row',
    backgroundColor: '#000',
    marginVertical: 15,
    borderRadius: 5,
    height: 60,
    paddingTop: 16,
    paddingHorizontal: 30,
    marginHorizontal: 25,
  },
  textInput: {
    flex: 1,
    marginTop: -15,
    paddingRight: 15,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    letterSpacing: 1,
  },
  noData: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  noDataText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    letterSpacing: 1,
    color: 'black',
    marginVertical: 10,
  },
});
