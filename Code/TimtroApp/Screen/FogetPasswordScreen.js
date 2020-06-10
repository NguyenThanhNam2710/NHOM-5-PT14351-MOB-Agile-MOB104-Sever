import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function HomeScreen({ navigation }) {
  const [array, setArray] = useState()

  const [password2, setPassword2] = useState('');
  const [phone, setPhone] = useState('');
  useEffect(() => {
    fetch('http://192.168.1.53:9090/getAlluser')
      .then(response => response.json())
      .then(json => {
        setArray(json);

      })
  })

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>Quên mật khẩu</Text>

      <TextInput style={styles.UseText}
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholderTextColor="gray"

        placeholder='Số điện thoại' />

      <TextInput style={styles.PassText}
        onChangeText={text => setPassword2(text)}
        value={password2}

        placeholderTextColor="gray"
        placeholder='Món ăn yêu thích của bạn là gì ?' />

      <TouchableOpacity style={styles.ButtonLogin}
        onPress={() => {
          if (phone == '') {
            Alert.alert('Vui lòng nhập Số điện thoại');
          } else if (password2 == '') {
            Alert.alert('Vui lòng nhập câu trả lời');
          } else {
            var status = 0,login=0;
            for (let index = 0; index < array.length; index++) {
              const element = array[index];
              if (phone == element.phone) {
                if (password2 == element.password2) {
                  navigation.navigate('Change',{phone:phone});
                  setPassword2('');
                  login = 1;
                } else {
                  Alert.alert('Câu trả lời của bạn chưa chính xác !');
                }
              } else {
                status=1;
              }
            }
            if (status ==1 && login==0) {
              Alert.alert('Số điện thoại không tồn tại');
            }
          }
        }}
      ><Text style={styles.TextButtonLogin}>Xác nhận</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonLogin2}
        onPress={() => {
          navigation.navigate('Login')
        }}
      ><Text style={styles.TextButtonLogin2}>Hủy</Text>
      </TouchableOpacity>

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
    marginTop: 20,
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#32CD32'
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
    width: 250,
    textAlign: "center",
    lineHeight: 50,
    fontSize: 16,
    color: '#fff'
  },
  ButtonLogin2: {
    marginTop: 20,
    height: 50,
    width: 250,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,

  },

  TextButtonLogin2: {
    height: 50,
    width: 250,
    textAlign: "center",
    lineHeight: 50,
    fontSize: 16,

  },
});
