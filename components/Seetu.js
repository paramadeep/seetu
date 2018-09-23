import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

export class Seetu extends Component<Props> {
  render() {
    console.log(this.props)
    return (
      <View >
        <Text> {this.props.data.name} </Text> 
      </View>
    )
  };
}


