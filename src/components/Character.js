import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';

export default function Character({character, navigation}) {
  const window = useWindowDimensions();
  const imageHeight = window.height / 10;

  const goToDetails = () => {
    navigation.navigate('Details', {character: character});
  };

  return (
    <View style={styles.container} onPress={goToDetails}>
      <TouchableWithoutFeedback onPress={goToDetails}>
        <View style={styles.row}>
          <View
            style={{width: 50, height: imageHeight, backgroundColor: 'gray'}}>
            <Image
              style={{width: 50, height: imageHeight}}
              source={{
                uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Text>{character.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
