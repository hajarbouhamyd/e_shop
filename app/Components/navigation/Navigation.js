import React, {Component} from 'react';
import {createStackNavigator, createAppContainer, NavigationScreenProp as navigation} from 'react-navigation'

import HomeScreen from "../../Screens/HomeScreen";
import cartScreen  from '../../Screens/cartScreen'
import AppDrawerNavigator from '../Header/header'
import {Button} from "react-native-vector-icons/AntDesign";
import {Icon} from 'native-base';

const stackNavigator = createStackNavigator({
    Drawer: {
      screen:  AppDrawerNavigator,
        navigationOptions: ({ navigation })=>({
            title :'QuickShop',

        }),
    },
        Cart: {
            screen: cartScreen,
            navigationOptions: ({ navigation })=>({
               // title :'Cart',
                headerStyle: {
                    backgroundColor:'red',
                }
            }),
        },
    },
    {
        defaultNavigationOptions:({ navigation }) => {
            const { routeName } = navigation.state.routes[navigation.state.index];
            return {
                headerRight: (
                    <Icon name="md-cart"
                          size={30}
                          onPress={() => navigation.navigate('Cart')}
                          style={{color: 'white',marginRight:10}}
                    />
                ),
                headerLeft: (
                    <Icon
                        style={{paddingLeft: 10,color: 'white'}}
                        onPress={() => navigation.openDrawer()}
                        name='md-menu'
                        size={30}
                    />),
                headerTitle: routeName,
                headerStyle: {
                    backgroundColor: 'red',
                    borderWidth:0,

                },

            }
        }

        }


);
export default createAppContainer(stackNavigator);