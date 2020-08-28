import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Splash from '../component/Splash';
import {Icon} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Popular from '../component/PopularTv';
import Carousel from '../component/CarouselTv';
import OnTheAir from '../component/OnTheAir';
import TopRatedTv from '../component/TopRatedTv';

export default function TvShowScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }
  return (
    <Animatable.View animation={'fadeInLeft'} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <Icon name="menu" type="feather" size={23} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SearchTv')}>
            <Icon name="search" type="feather" size={23} color="black" />
          </TouchableOpacity>
        </View>
        <Carousel navigation={navigation} />
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionText}>On The Air</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('OnTheAir')}
              style={styles.sectionAction}>
              <Icon
                name="arrowright"
                type="antdesign"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <OnTheAir navigation={navigation} />
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionText}>Top Rated</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TopRatedTv')}
              style={styles.sectionAction}>
              <Icon
                name="arrowright"
                type="antdesign"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <TopRatedTv navigation={navigation} />
        </View>
        <View style={styles.content}>
          <View style={styles.section}>
            <View style={styles.sectionTitle}>
              <Text style={styles.sectionText}>Most Popular</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PopularTv')}
              style={styles.sectionAction}>
              <Icon
                name="arrowright"
                type="antdesign"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Popular navigation={navigation} />
        </View>
      </ScrollView>
    </Animatable.View>
  );
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 5,
  },
  content: {
    marginVertical: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
  },
  sectionTitle: {
    paddingLeft: 15,
  },
  sectionAction: {
    paddingRight: 15,
  },
  sectionText: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    letterSpacing: 2,
  },
});
