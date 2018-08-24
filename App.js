

import React, { Component } from 'react';
import {

  Platform,
  StyleSheet,
  Text,
  View,
  CheckBox,
  TextInput,
  TouchableOpacity,
  ImageBackground 
  
} from 'react-native';


export default class Home  extends Component {
  constructor(){
    super();
    
    }
   
  
render() {
  return (
   /* <ImageBackground>
      source = {require('./App1/img/image1.jpg')}
      style={styles.container}
    </ImageBackground>*/
    <View style={styles.container}>
    
          <TextInput
            style={styles.inputStyle}
            placeholder="Index No"
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Password"
          />

          <TouchableOpacity>          
              <Text style={styles.btnText}>
                    LOGIN
              </Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.btnTextSingUp}>
                    Not a member? Sing Up Now  
              </Text>
          </TouchableOpacity>


    </View>
  );
}
}

var styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent:'center',
        paddingRight:30,
        paddingLeft:30
      },
      inputStyle:{
        backgroundColor:'#fff',
        marginBottom:15,
        paddingLeft:15,
        fontSize:20,
        color:'black',
      },

      btnText:{
        fontSize:20,
        backgroundColor:'red',
        paddingTop:10,
        paddingBottom:10,
        textAlign:'center',
        marginTop:30,
      },
      btnTextSingUp:{
        fontSize:16,
        color:'red',
        marginTop:40,
        textAlign:'center',
        
      },

});

