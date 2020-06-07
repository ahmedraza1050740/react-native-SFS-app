import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, Image, TextInput, TouchableOpacity  } from 'react-native';

class Motor extends Component{

    render(){
        return(
            <ImageBackground style={{width:'100%' , height:'100%'}} source={require('../img/bg.jpeg')} >
             <Image style={{width:'27%' , height:'14%',  marginTop:130 ,marginLeft:135}} source={require('../img/fyp/technology.png')} />
            <Text style={{fontSize:35, fontWeight:'bolder',marginLeft:70,  }}>ELECTRIC MOTOR</Text>

            <View style={{width:'100%' ,height:150,marginTop:50}}>

            <Button style={{width:20}} color='green'>ON</Button>
            <Button >OFF</Button>
               

               
                </View>


   </ImageBackground>

)}
}
export default Motor;

const styles=StyleSheet.create({

  

})