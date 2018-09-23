import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Icon  from 'react-native-vector-icons/MaterialIcons'

export class Icons extends Component<Props> {
  render() {
    return (
      <View>
        <Icon 
          name={this.props.name} 
          color={this.props.color} 
          size={this.props.size} 
          onPress={this.props.onPress}/>
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  round: {
    borderWidth:0,
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor:'#7c4dff',
    borderRadius:40,
  },
  none: {

  }
})

Icons.defaultProps = {
  type : 'none',
  name : 'done',
  color : 'white',
  size : 30,
}


