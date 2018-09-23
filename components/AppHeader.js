import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Link } from 'react-router-native'
import { Icons } from './BasicCompenents'

export  class AppHeader extends Component<Props> {
  render() {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>Seetu</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: '20%',
    backgroundColor: '#ffc107',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    color: 'white'
  }
})
