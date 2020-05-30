import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Comic from './Comic';
import {sortComicsByYear} from './util';

export default function Details({route}) {
  const {character} = route.params;
  const {items} = character.comics;

  const comics = sortComicsByYear(items).splice(0, 10);

  // Render component for each item in flatlist
  const renderItem = ({item, index}) => {
    return <Comic key={index} comic={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image
          style={styles.image}
          source={{
            uri: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          }}
        />
        <View style={{flex: 1}}>
          <View style={{margin: 4}}>
            <Text style={styles.name}>{character.name}</Text>
          </View>
          <View style={styles.description}>
            {character.description ? (
              <Text>{character.description}</Text>
            ) : (
              <Text>No description</Text>
            )}
          </View>
        </View>
      </View>
      <View style={styles.comics}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>Comics</Text>
        {comics.length ? (
          <FlatList
            data={comics}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <Text>No Comic Found!</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    marginBottom: 4,
  },
  details: {
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 130,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    padding: 4,
  },
  comics: {
    flex: 1,
    marginTop: 8,
    marginHorizontal: 2,
  },
});
