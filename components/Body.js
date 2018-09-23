import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList, Text,View } from 'react-native'
import  { Seetu }  from './../components'
import { Link } from 'react-router-native'

class BodyContainer extends Component<Props> {
  render() {
    return (
      <View >
        <Link to='/seetu/new' >
          <Text> Add Test </Text>
        </Link>
        <FlatList 
          data={this.props.seetus}
          renderItem={({item}) => <Seetu data={item}/> }
        />
      </View>
    )
  }
}

var mapStore = store => {
  return { seetus: store.seetus}
}
export let Body = connect(mapStore)(BodyContainer)
