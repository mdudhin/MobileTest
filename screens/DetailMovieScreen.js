import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {Icon} from 'react-native-elements';

export default function DetailMovieScreen({route, navigation}) {
  const {item} = route.params;
  const [defaultRating, setDefaultRating] = useState(item.vote_average / 2 - 1);
  const [maxRating, setMaxRating] = useState(5);

  let rating = [];
  //Array to hold the filled or empty Stars
  for (var i = 1; i <= maxRating; i++) {
    rating.push(
      <TouchableOpacity activeOpacity={0.7} key={i}>
        <Image
          style={styles.StarImage}
          source={
            i <= defaultRating
              ? {
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png',
                }
              : {
                  uri:
                    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png',
                }
          }
        />
      </TouchableOpacity>,
    );
  }

  const backAndClear = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <View style={styles.header}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`,
          }}
          style={styles.image}
        />
        <TouchableWithoutFeedback onPress={backAndClear}>
          <View style={styles.backButton}>
            <Icon name="arrow-left" type="feather" size={23} color="#fff" />
          </View>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.playButton}>
          <Icon
            name="play"
            type="font-awesome-5"
            size={20}
            color="rgb(219, 0, 0)"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.action}>
        <TouchableWithoutFeedback>
          <Icon name="heart-o" type="font-awesome" size={25} color="black" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <Icon name="share-2" type="feather" size={25} color="black" />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.content}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.release}>
          <Text style={styles.releaseText}>{item.release_date}</Text>
        </View>
        <View style={styles.rating}>
          {rating.map((data, i) => (
            <View key={i}>
              <Image
                style={styles.StarImage}
                source={
                  i <= defaultRating
                    ? {
                        uri:
                          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png',
                      }
                    : {
                        uri:
                          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png',
                      }
                }
              />
            </View>
          ))}
        </View>
        <View style={styles.synopsis}>
          <Text style={styles.synopsisText}>{item.overview}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    alignSelf: 'center',
    marginTop: 50,
  },
  header: {
    shadowColor: '#000',
    backgroundColor: '#fff',
    width: width,
    height: 370,
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    transform: [{scaleX: 1.5}],
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.48,
    shadowRadius: 14.27,
    elevation: 10,
  },
  image: {
    width: width,
    height: 370,
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    transform: [{scaleX: 1.3}],
    resizeMode: 'stretch',
  },
  backButton: {
    position: 'absolute',
    marginTop: 30,
    left: 80,
  },
  playButton: {
    position: 'absolute',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 3,
    width: 55,
    height: 55,
    borderRadius: 55,
    bottom: -25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: -30,
    marginHorizontal: 40,
  },
  title: {
    marginHorizontal: 80,
    marginVertical: 7,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: 2,
    textAlign: 'center',
  },
  release: {
    marginHorizontal: 90,
    marginVertical: 7,
  },
  releaseText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Montserrat-MediumLight',
    letterSpacing: 2,
    textAlign: 'center',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  StarImage: {
    width: 23,
    height: 23,
    marginHorizontal: 1,
    resizeMode: 'cover',
  },
  synopsis: {
    marginHorizontal: 40,
    marginVertical: 7,
  },
  synopsisText: {
    color: 'black',
    fontSize: 12,
    fontFamily: 'Montserrat-MediumLight',
    letterSpacing: 1.5,
    lineHeight: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
});
