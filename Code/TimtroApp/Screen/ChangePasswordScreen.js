import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function ChangePasswordScreen({ route, navigation }) {

  const [newPassword, setNewPassword] = useState('');
  const [cfnewPassword, setcfNewPassword] = useState('');
  const { phone } = route.params;
  const [mPhone, setPhone] = useState(phone)

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>Đổi mật khẩu</Text>

      <TextInput style={styles.PassText}
        onChangeText={text => setPhone(text)}
        value={mPhone}
        placeholderTextColor="gray"
        placeholder='Số điện thoại' />

      <TextInput style={styles.UseText}
        onChangeText={text => setNewPassword(text)}
        value={newPassword}
        placeholderTextColor="gray"
        secureTextEntry={true}
        placeholder='Mật khẩu mới' />

      <TextInput style={styles.PassText}
        onChangeText={text => setcfNewPassword(text)}
        value={cfnewPassword}
        secureTextEntry={true}
        placeholderTextColor="gray"
        placeholder='Xác nhận mật khẩu mới ' />


      <TouchableOpacity style={styles.ButtonLogin}
        onPress={() => {

          //các kí tự đặc biệt, số
          var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
          //SDT
          var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
          //các số
          var numberChars = "0123456789";

          //check kí tự đặc biệt
          var checkForSpecialChar = function (string) {
            for (i = 0; i < specialChars.length; i++) {
              if (string.indexOf(specialChars[i]) > -1) {
                return true
              }
            }
            return false;
          }

          //check số 
          var checkForNumberChar = function (string) {
            for (i = 0; i < numberChars.length; i++) {
              if (string.indexOf(numberChars[i]) > -1) {
                return true
              }
            }
            return false;
          }

          //check chữ
          var checkForChar = function (string) {
            for (i = 0; i < string.length; i++) {
              let char = string[i];
              if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
                return true;
              }
            }
            return false;
          }

          //kiểm tra số điện thoại
          if (mPhone == '') {
            alert('Vui lòng nhập số điện thoại.');
          }
          else if (mPhone.length != 10) {
            alert('Số điện thoại phải gồm 10 chữ số.')
          }
          else if (vnf_regex.test(mPhone) == false) {
            alert('Số điện thoại không đúng định dạng.')
          }
          //kiểm tra mật khẩu
          else if (newPassword == '') {
            alert('Vui lòng nhập mật khẩu.');
          }
          //kiểm tra mật khẩu dài 6-20 kí tự
          else if (newPassword.length < 6 || newPassword.length > 20) {
            alert('Mật khẩu phải dài từ 6 - 20 kí tự.');
          }
          //kiểm tra mật khẩu bao gồm chữ và số
          else if (!checkForNumberChar(newPassword) || !checkForChar(newPassword)) {
            alert('Mật khẩu phải bao gồm cả chữ và số');
          }
          else if (cfnewPassword == '') {
            alert('Vui lòng xác nhận mật khẩu.');
          }
          //kiểm tra confirmPass với Password
          else if (cfnewPassword != newPassword) {
            alert('Xác nhận mật khẩu không trùng với mật khẩu.');
          } else {
            fetch('http://192.168.1.53:9090/postUpdateUserPass', {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: new URLSearchParams({
                nPhone: mPhone,
                nPassword: newPassword,

              }).toString()
            })
              .then(response => response.text())
              .then(json => {
                Alert.alert('Đổi mật khẩu thành công')
                navigation.navigate('Login');
              })
              .catch((error) => {
                alert('Đổi mật khẩu thất bại: ' + error);
              });
          }

        }


        }

      ><Text style={styles.TextButtonLogin}>Xác nhận</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonLogin2}
        onPress={() => {
          navigation.navigate('Login');
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
    fontSize: 40, fontWeight: "bold"
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
    padding: 10,
    marginBottom: 20,
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