import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity}from 'react-native';
import * as Font from 'expo-font';
import DatePicker from 'react-native-datepicker';

export default class DatePickerComponent extends Component {

  constructor() {
    super();
    this.state={
      date:'',
      fontLoaded:false
    };
  }

  async componentWillMount(){
    await Font.loadAsync({
      'manrope-medium': require('../../assets/fonts/manrope-medium.ttf'),
    });
    this.setState({fontLoaded:true});
  }

  // async selectDate(){
  //   const {day, month, year, action} = await DatePickerAndroid.open({mode:'spinner'})
    
  //   if (action==='dateSetAction'){
  //     date = day+'-'+(month+1)+'-'+year
  //     formattedDate = moment(date, 'DD-MM-YYYY').format('DD-MMM-YYYY')
  //     this.setState({date:formattedDate});
  //   }
  // }

  render() {
    return(
      <View style={styles.ViewStyle}>
        {
          (this.state.fontLoaded)?
            <DatePicker
            style={{width: 250}}
            mode="date"
            date={this.state.date}
            androidMode="spinner"
            placeholder="Salect A Date"
            format="DD - MMM - YYYY"
            confirmBtnText="Select"
            cancelBtnText="Cancel"
            onDateChange={(date) => {this.setState({date: date})}}
            customStyles={{
              dateInput:{
                borderRadius:5,
                borderWidth:2,
                borderColor:'rgb(110,110,110)'
              },
              dateText:{
                fontFamily:'manrope-medium',
                fontSize:18,
                color:'rgb(60,60,60)'
              },
              placeholderText:{
                fontFamily:'manrope-medium',
                fontSize:18,
                color:'rgb(130,130,130)'
              },
            }}      
            />
          :<View/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    paddingBottom:60,
    flexDirection:'row'
  },
  TextViewStyle:{
    borderWidth:2,
    borderRadius:5,
    padding:5,
    width:200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20
  },
  TextStyle:{
    fontFamily:'manrope-medium',
    fontSize:16,
    color:'rgb(60,60,60)'
  }
})