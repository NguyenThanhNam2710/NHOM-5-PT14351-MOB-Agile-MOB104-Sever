import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, label, Alert, CheckBox, TouchableOpacity } from 'react-native';


export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [array, setArray] = useState();
  useEffect(() => {
    fetch('http://192.168.1.53:9090/getAlluser')
      .then(response => response.json())
      .then(json => {
        setArray(json);
      })
  })
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>Đăng Nhập</Text>

      <TextInput style={styles.UseText}
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholderTextColor="gray"

        placeholder='Số điện thoại' />

      <TextInput style={styles.PassText}
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholderTextColor="gray"
        placeholder='Mật khẩu' />

      <TouchableOpacity style={styles.ButtonLogin}
        onPress={() => {
          if (phone == '') {
            Alert.alert('Vui lòng nhập Số điện thoại');
          } else if (password == '') {
            Alert.alert('Vui lòng nhập mật khẩu.');
          } else {
            let status = 0;
            for (let index = 0; index < array.length; index++) {
              const element = array[index];
              if (phone == element.phone && password == element.password) {
                status++;
              }
            }
            if (status > 0) {
              navigation.navigate('Home');
              setPassword('');
            } else {
              Alert.alert('Tài khoản hoặc mật khẩu sai');
            }
            // Alert.alert('dang nhap thanh cong');
          }

        }}
      ><Text style={styles.TextButtonLogin}>Đăng Nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonLogin2}
        onPress={() => {

          navigation.navigate('Register')


        }}
      ><Text style={styles.TextButtonLogin2}>Bạn chưa có tài khoản ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Forget');
        }}>

        <Text style={styles.TextQuenMatKhau}>
          Quên mật khẩu
        </Text>
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
  buttonRegister: {
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

    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#32CD32',
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
    marginTop: 20,
    height: 50,
    width: 250,

    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  TextQuenMatKhau: {
    color: 'red',
    fontSize: 16,
    marginTop: 150
  },
});

