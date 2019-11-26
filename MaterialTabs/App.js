import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


class HomeScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
        </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Profile Screen</Text>
        </View>
    );
  }
}

class ImageScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Image Screen</Text>
            </View>
        );
    }
}

class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Cart Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

const TabNavigator = createMaterialBottomTabNavigator(
{
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>
            </View>),
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions:{
          tabBarLabel:'Profile',
          tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>
              </View>),
          activeColor: '#f0edf6',
          inactiveColor: '#7f8c8d',
          barStyle: { backgroundColor: '#2c3e50' },
      }
    },
    Image: {
      screen: ImageScreen,
      navigationOptions:{
        tabBarLabel:'History',
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-images'}/>
            </View>),
        activeColor: '#f0edf6',
        inactiveColor: '#7f8c8d',
        barStyle: { backgroundColor: '#2c3e50' },
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions:{
        tabBarLabel:'Cart',
        tabBarIcon: ({ tintColor }) => (
            <View>
                <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'}/>
            </View>),
        inactiveColor: '#7f8c8d',
        barStyle: { backgroundColor: '#2c3e50' },
      }
    },
  },
  {
    initialRouteName: "Home",
    activeColor: '#f0edf6',
    inactiveColor: '#7f8c8d',
    barStyle: { backgroundColor: '#2c3e50' },
  },
);

export default createAppContainer(TabNavigator);
