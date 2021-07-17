import React, {Component} from 'react';

import { View, Text} from 'react-native';

import Newtask from './containers/newtask';

import Tasksview from './containers/Tasksview';

class Myapp extends Component
{
  render() {
    return(
      <View style={{flex:1, justifyContent:'flex-start', padding:20, backgroundColor:'pink'}}>
          <Text style={{fontSize:20, padding:10, width:361, color:'blue', backgroundColor:'orange'}}>Task Handler</Text>
          <Newtask/>
          <View>
              <Tasksview/>
          </View>
      </View>
    );
  }
}

export default Myapp;