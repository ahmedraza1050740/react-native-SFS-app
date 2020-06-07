import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity  } from 'react-native';

class Waterlevel extends Component{

    render(){
        return(
            <ImageBackground style={{width:'100%' , height:'100%'}} source={require('../img/bg.jpeg')} >
             <Image style={{width:'27%' , height:'14%',  marginTop:130 ,marginLeft:135}} source={require('../img/fyp/water level.png')} />
            <Text style={{fontSize:35, fontWeight:'bolder',marginLeft:70,  }}>WATER LEVEL</Text>

            <View style={{width:'100%' ,height:150,marginTop:50}}>
                <Image style={{ width:220, height:140 ,marginLeft:60 }} source={require('../img/fyp/meter.png')}
                />

                <Text style={{fontSize:30, fontWeight:'bold',marginLeft:125,marginTop:20}}>20 inch</Text>
                </View>


   </ImageBackground>

)}
}
export default Waterlevel;

const styles=StyleSheet.create({

  

})