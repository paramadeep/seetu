import React, { Component } from 'react';
import {
  View,
  TextInput,
  Platform,
} from 'react-native';

export class NumberPicker extends Component<Props> {
  render() {
    var isValidNumber = (number) => {
      return this.props.isInteger ?  Number.isInteger(number) : !Number.isNaN(number)
    }
    var validateNumberRange = (text) => {
      text = text.replace(/,/g,'')
      var numberValue = Number(text)
      if ( text == '' || 
        isValidNumber(numberValue) && 
        numberValue <= this.props.max && 
        numberValue >= this.props.min){
        this.props.onChangeText(text)
      }
    }
    return (
      <View > 
        <TextInput
          autoCorrect={Platform.OS === 'ios' ? true : false}
          placeholder={this.props.placeholder}
          onChangeText={validateNumberRange}
          keyboardType='numeric'
          value={this.props.value}
        />
      </View>
    )
  }
}

NumberPicker.defaultProps = {
  min : 0,
  max : 100,
  isInteger : true
}
