import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';

export default function CarouselTvItem({item, length, activeSlide, navigation}) {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailTv', {
            item: item,
          })
        }>
        <Image
          style={styles.image}
          source={{uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`}}
        />
      </TouchableOpacity>
    </View>
  );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: height / 2.7,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
