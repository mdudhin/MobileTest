import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Splash() {
  const [onAnimated, setOnAnimated] = useState('zoomIn');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  return (
    <Animatable.View
      style={styles.container}
      animation={!isLoading ? 'fadeOut' : null}>
      <Animatable.Text style={styles.logo} animation={onAnimated}>
        MoveXi
      </Animatable.Text>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DB0000',
  },
  logo: {
    fontFamily: 'Montserrat-MediumItalic',
    fontSize: 40,
    color: '#fff',
  },
});
