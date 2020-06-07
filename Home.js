import React, { Component } from 'react';
import { StyleSheet,Button, Text, View, ImageBackground, TextInput, TouchableOpacity  } from 'react-native';

class Home extends Component{

    render(){
        return(
            <ImageBackground style={{width:'100%' , height:'100%'}} source={require('../img/bg.jpeg')} >

            <View style={styles.box}>

            <View style={styles.smaleBox}>

            </View>

            </View>



   </ImageBackground>

)}
}
export default Home;

const styles=StyleSheet.create({

    box:{
        marginTop:150,
        width:'100%',
        height:'55%',
        backgroundColor:'lightgray',
    },
    smaleBox:{
        width:100,
        height:55,
        backgroundColor:'red'
    }

})