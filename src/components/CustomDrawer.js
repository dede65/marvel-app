import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomDrawer({progress, ...props}) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const openLink = async () => {
    console.log('openlink');
    await Linking.openURL('https://twitter.com/pathcomtr');
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={{marginBottom: 4, height: 180}}>
        <ImageBackground
          resizeMethod="scale"
          resizeMode="stretch"
          source={require('../assets/marvel3.jpg')}
          style={styles.image}></ImageBackground>
      </View>
      <Animated.View style={{transform: [{translateX}]}}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Twitter"
          icon={() => <Icon name="twitter" size={24} />}
          onPress={openLink}
        />
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
