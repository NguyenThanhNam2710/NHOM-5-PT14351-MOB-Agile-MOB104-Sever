import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,TextInput,label,Alert,CheckBox,TouchableOpacity} from 'react-native';


export default function ChangePasswordScreen({ navigation }) {

  return (
    <View style={styles.container}>
       <Text style={styles.TitleText}>Đổi mật khẩu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },

  TitleText: {
    marginTop: 40,
    marginBottom: 100,
    fontSize: 40,
    fontWeight: "bold"
  },
buttonRegister:{
  marginTop: 10,
  height: 50,
  width: 150,
  backgroundColor: 'gray'
},
  UseText: {
    height: 50,
    width: 320,
    borderWidth: 1,
    color: '#000',
    padding: 10
  },

  PassText: {
    height: 50,
    width: 320,
    borderWidth: 1,
    color: '#000',
    marginTop: 20,
    padding: 10
  },

  ButtonLogin: {
    marginTop: 40,
    height: 50,
    width: 250,
   
    borderRadius:5,
    borderColor:'gray',
    borderWidth:1,
    backgroundColor:'#32CD32',
  },

  TextButtonLogin: {
    height: 50,
    width: 250,
    textAlign: "center",
    lineHeight: 50,
    fontSize: 16,
   
   
  },
  TextButtonLogin2: {
    height: 50,
    width: 250,
    textAlign: "center",
    lineHeight: 50,
    fontSize: 16,
    
   
    
   
  },
  ButtonLogin2: {
    marginTop:20,
    height: 50,
    width: 250,
    
    borderRadius:5,
    borderColor:'gray',
    borderWidth:1,
  },
TextQuenMatKhau:{
color:'red',
fontSize: 16,
marginTop:150
},
});

