import React, { Component} from 'react';
import { connect } from 'react-redux'
import {
  View,
  TextInput,
  Platform ,
} from 'react-native';
import { 
  DatePicker,
  NumberPicker,
} from './BasicCompenents'

import {
  NewSeetuHeader
} from '../components'

class NewSeetuContainer extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      key: new Date().getTime().toString(),
      totalAmout: '',
      startDate: '',
      numberOfAuction: '',
      intervalInMonths: ''
    }
  }

  render() {
    var addSeetu = () => {
      this.props.addSeetu(this.state)
      this.props.history.goBack()
    }
    return (
      <View >
        <NewSeetuHeader onConfirm={addSeetu}/>
        <TextInput
          onChangeText={(name) => this.setState({ name })}
          placeholder="Name"
          autoCorrect={Platform.OS == 'ios' ? true : false}
          value={this.state.name}
        />
        <NumberPicker
          placeholder="Amount"
          onChangeText={(totalAmout) => this.setState({ totalAmout })}
          max={99999999} min={1} isInteger={false}
          value={this.state.totalAmout}
        />

      <DatePicker onDateSelect={(startDate)=> this.setState({startDate})}
        placeholder="Start Date"
        value={this.state.startDate}
      />

    <NumberPicker
      placeholder="No. Of Auctions"
      onChangeText={(numberOfAuction)=>{this.setState({numberOfAuction})}} 
      max={50} min={1} isInteger={true}
      value={this.state.numberOfAuction}
    />
    <NumberPicker
      placeholder="Interval in Months"
      onChangeText={(intervalInMonths)=>{this.setState({intervalInMonths})}}
      max={24} min={1} isInteger={true}
      value={this.state.intervalInMonths}
    />
  </View>
    )
  }
}

var mapStore = () => {
  return { }
}

var mapDispatch = dispatch => {
  return {
    addSeetu: (newSeetu) => {
      dispatch({type:"ADD_SEETU",seetu: newSeetu})
    }
  };
}
export let NewSeetu = connect(mapStore,mapDispatch)(NewSeetuContainer)
