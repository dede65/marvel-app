import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Comic({comic}) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={{width: 40, height: 50, backgroundColor: 'gray'}}>
          <Image
            style={{width: 50, height: 50}}
            source={{
              uri: `${comic.resourceURI}`,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <Text>{comic.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    //borderWidth:2,
    //borderColor:"red"
  },
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'gray',
  },
  row: {
    flexDirection: 'row',
  },
});
