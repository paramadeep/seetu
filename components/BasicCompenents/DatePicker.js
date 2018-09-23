import React, { Component } from 'react';
import {
  TextInput,
  View,
  DatePickerAndroid,
  TouchableOpacity
} from 'react-native';

export class DatePicker extends Component<Props> {
  render() {
    var processSelectionResponse = (data) => {
      if (data.action !== DatePickerAndroid.dismissedAction) {
        var selectedDate = new Date(data.year,data.month,data.day)
        this.props.onDateSelect(selectedDate)
      }
    }
    var openDatePicker = () => {
      console.info("touched but ")
      DatePickerAndroid.open({
        date: new Date(),
        minDate: new Date(2010,1,1)
      })
        .then(processSelectionResponse)
        .catch((err) => {
          console.error("error on date", err)
        })
    }     
    return (
      <View >
        <TouchableOpacity onPress={openDatePicker}>
          <TextInput
            placeholder={this.props.placeholder}
            value={this.props.value ? this.props.value.toLocaleDateString() : "" }
            editable={false}
          /> 
        </TouchableOpacity>
      </View>
    )
  }
}
