import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  ActivityIndicator,
} from 'react-native';
import Item from './AllTvShowItem';
import {Icon} from 'react-native-elements';

export default function AllTvShow({
  showTvState,
  handleLoadMore,
  navigation,
  loading,
}) {
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.noData}>
          <ActivityIndicator size="large" color="#53C9C2" />
        </View>
      ) : showTvState.length === 0 ? (
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
        <FlatList
          data={showTvState}
          keyExtractor={(item) => `${item.id}`}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          horizontal={false}
          numColumns={2}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={5}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return <Item item={item} navigation={navigation} />;
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
});
