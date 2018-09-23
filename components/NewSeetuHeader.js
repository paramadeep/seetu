import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Link } from 'react-router-native'
import { Icons } from './BasicCompenents'

export class NewSeetuHeader extends Component<Props> {
  render() {
    return (
      <View style={styles.header}>
        <Link to='/' >
          <Icons name="arrow-back"  />  
        </Link>
        <Text style={styles.title} onPress={this.props.onConfirm} >New Seetu</Text>
        <Icons name="done" onPress={()=>this.props.onConfirm()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: '20%',
    backgroundColor: '#ffa000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 10,
  },
  title: {
    fontSize: 20,
    color: '#212121'
  }
})
