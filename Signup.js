import React, { Component } from 'react' ;
import { StyleSheet,Button, Text, View, ImageBackground, TextInput  } from 'react-native';


class Signup extends Component{

    getButton () {
        alert('working')
    }


    render(){
        return(
            <ImageBackground style={{width:'100%' , height:'100%'}} source={require('./img/bg.jpeg')} >

                <View style={styles.overlay} >
                    <Text style={styles.heading}>Signup</Text>

                    <TextInput placeholder='Username' style={styles.input} />
                    <TextInput placeholder='Email' style={styles.input} />
                    <TextInput placeholder='Password' style={styles.input} />
                    <TextInput placeholder='Re-password' style={styles.input} />
<View>
                    <Button onPress={this.getButton} >Signup</Button></View>
                    

                </View>

            </ImageBackground>
        )
    }
}

export default Signup;

const styles= StyleSheet.create({
    overlay:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'green'
    },
    heading:{
        paddingBottom:20,
        fontSize:40,
        fontWeight:'bolder',

    },

    input:{
        justifyContent:'center' ,
         alignItems:'center',
         fontSize:20,
         padding:10,
         
    }
})