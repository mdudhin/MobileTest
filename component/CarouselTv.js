import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Text, ActivityIndicator} from 'react-native';
import CarouselList from 'react-native-snap-carousel';
import Item from './CarouselTvItem';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {getAiringToday} from '../redux/Action/TvAction';

export default function CarouselTv({navigation}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const dispatch = useDispatch();
  const showAiringTodayState = useSelector((state) => state.tv);

  useEffect(() => {
    dispatch(getAiringToday());
  }, [dispatch]);

  const tv = showAiringTodayState.airingToday;
  const loading = showAiringTodayState.loadingAiringToday;

  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.noData}>
          <ActivityIndicator size="large" color="#53C9C2" />
        </View>
      ) : tv.length === 0 ? (
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
        <CarouselList
          layout={'default'}
          data={tv}
          renderItem={({item}) => {
            return (
              <Item
                item={item}
                length={tv.length}
                activeSlide={activeSlide}
                navigation={navigation}
              />
            );
          }}
          onSnapToItem={(index) => setActiveSlide(index)}
          sliderWidth={width}
          itemWidth={200}
          inactiveSlideShift={0.5}
          inactiveSlideOpacity={0.5}
          autoplay={true}
          autoplayDelay={1000}
          autoplayInterval={10000}
          enableMomentum={false}
          loop={true}
          slideStyle={{borderRadius: 20}}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
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
