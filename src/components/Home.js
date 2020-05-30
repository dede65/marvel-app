import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Character from './Character';
import axios from 'axios';
import md5 from 'md5';
import {API_KEY,PRIVATE_KEY,PUBLIC_KEY} from "./config"

export default function Home({navigation}) {
  //const PUBLIC_KEY = 'cc0a7c196c3221f77b39b89d191fd863';
  //const PRIVATE_KEY = '73f1b93e1f5bec48c1a64fafad175ee78af1e1d1';
  let ts = Date.now();

  const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  //const API_KEY = 'cc0a7c196c3221f77b39b89d191fd863';

  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchCharacters = async () => {
    const URL = `http://gateway.marvel.com:80/v1/public/characters?ts=${ts}&apikey=${API_KEY}&hash=${hash}&limit=${limit}&offset=`;
    try {
      const response = await axios.get(URL);

      const results = response.data.data.results;
      console.log('results', results);
      setData(results);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setIsLoadingMore(false);
    if (limit <= 100) {
      fetchCharacters();
    }
  }, [isLoadingMore]);

  const renderItem = ({item, index}) => {
    return <Character key={index} character={item} navigation={navigation} />;
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    setLimit(limit + 10);
  };

  const loading = () => {
    return (
      <View style={{height: 40}}>
        {limit <= 100 ? (
          <ActivityIndicator size="small" color="#cc0000" />
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading}
      />
    </SafeAreaView>
  );
}
