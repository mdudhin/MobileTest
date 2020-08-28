import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './component/DrawerContent';
import HomeScreen from './screens/HomeScreen';
import DetailMovieScreen from './screens/DetailMovieScreen';
import UpComingScreen from './screens/UpComingScreen';
import TopRatedScreen from './screens/TopRatedScreen';
import PopularScreen from './screens/PopularScreen';
import TvShowScreen from './screens/TvShowScreen';
import OnTheAirScreen from './screens/OnTheAirScreen';
import TopRatedTvScreen from './screens/TopRatedTvScreen';
import PopularTvScreen from './screens/PopularTvScreen';
import SearchMovieScreen from './screens/SearchMovieScreen';
import SearchTvScreen from './screens/SearchTvScreen';
import DetailTvScreen from './screens/DetailTvScreen';

export default function Rooter() {
  const HomeStack = createStackNavigator();
  const HomeStackScreen = ({navigation}) => {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleAlign: 'center',
        }}>
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="DetailMovie"
          component={DetailMovieScreen}
          options={{headerShown: false}}
        />
        <HomeStack.Screen
          name="UpComing"
          component={UpComingScreen}
          options={{
            title: 'Up Coming',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
        <HomeStack.Screen
          name="TopRated"
          component={TopRatedScreen}
          options={{
            title: 'Top Rated',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
        <HomeStack.Screen
          name="Popular"
          component={PopularScreen}
          options={{
            title: 'Most Popular',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
        <HomeStack.Screen
          name="SearchMovie"
          component={SearchMovieScreen}
          options={{
            title: 'Search',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
      </HomeStack.Navigator>
    );
  };

  const TvShowStack = createStackNavigator();
  const TvShowStackScreen = ({navigation}) => {
    return (
      <TvShowStack.Navigator
        screenOptions={{
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleAlign: 'center',
        }}>
        <TvShowStack.Screen
          name="Home"
          component={TvShowScreen}
          options={{headerShown: false}}
        />
        <TvShowStack.Screen
          name="DetailTv"
          component={DetailTvScreen}
          options={{headerShown: false}}
        />
        <TvShowStack.Screen
          name="OnTheAir"
          component={OnTheAirScreen}
          options={{
            title: 'On The Air',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
        <TvShowStack.Screen
          name="TopRatedTv"
          component={TopRatedTvScreen}
          options={{
            title: 'Top Rated',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
        <TvShowStack.Screen
          name="PopularTv"
          component={PopularTvScreen}
          options={{
            title: 'Most Popular',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
        <TvShowStack.Screen
          name="SearchTv"
          component={SearchTvScreen}
          options={{
            title: 'Search',
            headerTitleStyle: {
              color: '#DB0000',
              fontSize: 20,
              fontFamily: 'Montserrat-Medium',
            },
          }}
        />
      </TvShowStack.Navigator>
    );
  };

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#DB0000',
        }}
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="HomeScreen"
          component={HomeStackScreen}
          options={{
            drawerLabel: () => <Text style={styles.text}>Movie</Text>,
            drawerIcon: () => (
              <Icon
                name="movie"
                type="materialcommunityicons"
                size={23}
                color="#fff"
              />
            ),
          }}
        />
        <Drawer.Screen
          name="TvShowScreen"
          component={TvShowStackScreen}
          options={{
            drawerLabel: () => <Text style={styles.text}>TV Show</Text>,
            drawerIcon: () => (
              <Icon name="tv" type="fontawesome" size={23} color="#fff" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
  },
});
