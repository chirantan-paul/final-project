import React, {Component} from 'react';

import { View, Text, TextInput, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import{connect} from 'react-redux';
import Tasksview from './Tasksview';

class Newtask extends Component
{
    state={
        text:''
    }

    Addtask=(text)=>{
        this.props.dispatch({type:'Add_task',text})
        this.setState({text: ''})
    }

    render() {
        return(
        <View style={{flexDirection:'row', marginHorizontal: 10}}>
            <TextInput  onChangeText={(text) => this.setState({ text })} value={this.state.text} placeholder = 'Add a new task' style={{backgroundColor:'cyan', height:50, flex:1, padding:5}}/>
            <TouchableOpacity onPress={()=>this.Addtask(this.state.text)}>
                <View style={{ height:50, backgroundColor:'yellow' , alignItems:'center', justifyContent:'center'}}>
                    <Ionicons name='add' size={30} style={{color:'green', padding:10}}/>
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}

export default connect()(Newtask);