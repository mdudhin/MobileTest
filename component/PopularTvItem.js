import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function PopularTvItem({item, navigation}) {
  return (
    <View style={styles.cardView}>
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
  cardView: {
    flex: 1,
    marginHorizontal: 10,
  },
  image: {
    width: 150,
    height: height / 4,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
