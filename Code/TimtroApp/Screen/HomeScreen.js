import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen(navigation ) {

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>HOME MENU</Text>

 

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

  Title: {
    margin: 5,
    padding: 5,
    fontSize: 20,
    backgroundColor: "#fff",
    fontWeight: "bold"
  },
  UseText: {
    height: 50,
    width: 320,
    borderWidth: 1,
    color: '#000',
    padding: 10
  },
  ButtonLogin: {
    marginTop: 40,
    height: 50,
    width: 150,
   
    backgroundColor: 'red'
  },

  PassText: {
    height: 50,
    width: 320,
    borderWidth: 1,
    color: '#000',
    marginTop: 20,
    padding: 10
  },
  TextButtonLogin: {
    height: 50,
    width: 150,
    textAlign: "center",
    lineHeight: 50,
    fontSize: 16,
    color: '#fff'
  },
});
