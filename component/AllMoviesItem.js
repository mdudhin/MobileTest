import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default function AllMoviesItem({item, navigation}) {
  return (
    <View style={styles.cardView}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailMovie', {
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
    marginVertical: 10,
  },
  image: {
    width: 180,
    height: height / 3,
    borderRadius: 20,
    alignSelf: 'center',
  },
});
