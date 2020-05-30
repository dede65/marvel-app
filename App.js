import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/components/Home';
import Details from './src/components/Details';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawer from './src/components/CustomDrawer';

const HomeStack = createStackNavigator();

// Home stack screen composed of Home and Details screens
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ed1d24',
        },
        headerTintColor: '#fff',
      }}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          headerShown: true,
          title: 'Marvel Karakterleri',

          headerLeft: () => (
            <Icon
              onPress={() => navigation.openDrawer()}
              name="menu"
              size={32}
              color="#fff"
              style={{marginLeft: 8}}
            />
          ),
        })}
      />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

/** Drawer navigator composed of Home stack navigator along with About, Contact screens
 * and Twitter label within CustomDrawer component*/
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="account-group" size={24} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: ({focused, color, size}) => (
            <Icon name="information-outline" size={24} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ed1d24" />
      <MyDrawer />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
