import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  AppHeader,
  Body
} from '../components'


export class Home extends Component<Props> {
  render() {
    return (
      <View >
        <AppHeader/>
        <Body/>
      </View>
    );
  }
}
