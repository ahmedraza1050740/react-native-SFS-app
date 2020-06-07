import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity  } from 'react-native';

class Temperature extends Component{

    render(){
        return(
            <ImageBackground style={{width:'100%' , height:'100%'}} source={require('../img/bg.jpeg')} >
             <Image style={{width:'13%' , height:'13%',  marginTop:100 ,marginLeft:165}} source={require('../img/fyp/degrees.png')} />
            <Text style={{fontSize:25, fontWeight:'bolder',marginLeft:90  }}>TEMPERATURE</Text>

            <View style={{width:'100%' ,height:150,marginTop:50}}>
                <Image style={{ width:220, height:140 ,marginLeft:60 }} source={require('../img/fyp/meter.png')}
                />

                <Text style={{fontSize:30, fontWeight:'bold',marginLeft:155,marginTop:30}}>21</Text>
                </View>


   </ImageBackground>

)}
}
export default Temperature;

const styles=StyleSheet.create({

  

})