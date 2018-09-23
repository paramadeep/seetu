import React, { Component } from 'react';
import { NativeRouter, Route, Link } from 'react-router-native'

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  NewSeetu,
  Home
} from './components'

export default class RootComponent extends Component<Props> {
  render() {
    return (
      <NativeRouter>
        <View>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/seetu/new" component={NewSeetu}/>
        </View>

      </NativeRouter>
    );
  }
}
