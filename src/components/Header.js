import React, {Component} from 'react';
import { View, Text, StyleSheet, StatusBar }from 'react-native';
import * as Font from 'expo-font';

export default class Header extends Component {

  constructor() {
    super();
    this.state={
      fontLoaded : false
    }
  }

  async componentWillMount(){
    await Font.loadAsync({
        'Gotham-Black': require('../../assets/fonts/Gotham-Black.ttf'),
      });
      this.setState({fontLoaded:true});

  }

  render() {
    return(
      <View style={styles.HeaderStyle}>
        <StatusBar backgroundColor='white' barStyle='dark-content' translucent={false}/>
          {
          (this.state.fontLoaded)?
          <Text style={styles.TextStyle}>Date Picker</Text>:
          <View/>
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TextStyle: {
    fontFamily:'Gotham-Black',
    fontSize:30,
    color:'rgb(60,60,60)'
  },
  HeaderStyle: {
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    height:60,
    marginTop:15,
    margin:10,
    borderRadius:8,
    elevation:7
  }
})