/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import StackNavigator from './app/Components/navigation/Navigation'
import AppDrawerNavigator from './app/Components/Header/header';

export default class e_shop extends Component{
    render(){
        return(
            <StackNavigator />
        )
    }
}

AppRegistry.registerComponent('e_shop', ()=> e_shop);