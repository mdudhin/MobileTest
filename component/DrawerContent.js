import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

const DrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>MoveXi</Text>
      </View>
      <DrawerContentScrollView {...props} style={styles.content}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    backgroundColor: '#000000',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 150,
  },
  logo: {
    fontFamily: 'Montserrat-MediumItalic',
    fontSize: 40,
    color: '#fff',
  },
});
