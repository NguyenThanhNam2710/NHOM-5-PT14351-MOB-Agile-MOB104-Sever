import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Button, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function SignupScreen({ route, navigation }) {
    const [array, setArray] = useState()
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [cfpassword, setcfPassword] = useState('');
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
            <ScrollView>
                <View style={styles.box} >
                    <Text style={styles.TitleText}>Đăng Ký</Text>

                    <TextInput style={styles.UseText}
                        onChangeText={text => setFullName(text)}
                        value={fullName}
                        placeholderTextColor="gray"
                        placeholder='Họ tên' />

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

                    <TextInput style={styles.PassText}
                        onChangeText={text => setcfPassword(text)}
                        value={cfpassword}
                        secureTextEntry={true}
                        placeholderTextColor="gray"
                        placeholder='Xác nhận mật khẩu' />

                    <TextInput style={styles.UseText}
                        onChangeText={text => setPassword2(text)}
                        value={password2}
                        placeholderTextColor="gray"
                        placeholder='Món ăn yêu thích của bạn là gì' />


                    <View style={{
                        flexDirection: "row",
                        marginBottom: 20,
                    }}>
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
                                        if(char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z'){
                                            return true;
                                        }
                                    }
                                    return false;
                                }

                                
                                
                                //kiểm tra họ tên
                                if (fullName == '') {
                                    alert('Vui lòng nhập Họ tên.');
                                }
                                //kiểm tra kí tự đặc biệt trong ô Họ tên
                                else if (checkForSpecialChar(fullName)) {
                                    alert('Họ tên không được chứa kí tự đặc biệt.');
                                }
                                //kiểm tra số điện thoại
                                else if (phone == '') {
                                    alert('Vui lòng nhập số điện thoại.');
                                } 
                                else if(phone.length != 10){
                                    alert('Số điện thoại phải gồm 10 chữ số.')
                                }
                                else if(vnf_regex.test(phone) == false){
                                    alert('Số điện thoại không đúng định dạng.')
                                }
                                //kiểm tra mật khẩu
                                else if (password == '') {
                                    alert('Vui lòng nhập mật khẩu.');
                                } 
                                 //kiểm tra mật khẩu dài 6-20 kí tự
                                 else if(password.length < 6 || password.length > 20){
                                    alert('Mật khẩu phải dài từ 6 - 20 kí tự.');
                                }
                                 //kiểm tra mật khẩu bao gồm chữ và số
                                 else if(!checkForNumberChar(password) || !checkForChar(password)){
                                    alert('Mật khẩu phải bao gồm cả chữ và số');
                                }
                                else if (cfpassword == '') {
                                    alert('Vui lòng xác nhận mật khẩu.');
                                }
                                //kiểm tra confirmPass với Password
                                else if (cfpassword != password) {
                                    alert('Xác nhận mật khẩu không trùng với mật khẩu.');
                                }
                                else if (password2 == '') {
                                    alert('Vui lòng trả lời câu hỏi.');
                                } 
                                //kiểm tra pass phụ có chứa số và kí tự đặc biệt không
                                else if (checkForSpecialChar(password2) || checkForNumberChar(password2)) {
                                    alert('Câu hỏi phụ chỉ được nhập chữ.');
                                }

                                else {
                                    let s = 0;
                                    for (let index = 0; index < array.length; index++) {
                                        const element = array[index];
                                        // if (element.username == fullName) {
                                        //     s++;
                                        // }
                                        
                                        if(phone == element.phone){
                                            s++;
                                            alert('Số điện thoại đăng ký đã tồn tại');
                                        }
                                    }
                                    
                                    if (s <= 0) {
                                        fetch('http://192.168.1.53:9090/postUser', {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/x-www-form-urlencoded"
                                            },
                                            body: new URLSearchParams({
                                                fullname: fullName,
                                                phone: phone,
                                                password: password,
                                                password2: password2,
                                            }).toString()
                                        })
                                            .then(response => response.text())
                                            .then(json => {
                                                navigation.navigate('Login');
                                                alert('Tạo tài khoản thành công ')
                                                // setUsername('');
                                                // setPassword('');
                                                // setcfPassword('');
                                            })
                                            .catch((error) => {
                                                alert('tạo tài khoản thất bại ' + error)
                                            });
                                    } else {
                                        // Alert.alert('Tạo tài khoản thất bại.\nSố điện thoại ' + phone + ' đã tồn tại.');
                                    }

                                }
                            }
                            }><Text style={styles.TextButtonLogin}>Đăng ký</Text>
                        </TouchableOpacity>
     
                    </View>
                    <TouchableOpacity style={styles.ButtonCancel}
                            onPress={() => {
                                navigation.navigate('Login');
                            }}><Text style={styles.TextButtonLogin}>Đã có tài khoản</Text>
                        </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    box: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5
    },

    TitleText: {
        marginTop: 40,
        marginBottom: 60,
        fontSize: 32,
        fontWeight: "bold",
    },

    UseText: {
        height: 50,
        width: 320,
        marginTop: 20,
        borderWidth: 1,
        color: '#000',
        padding: 10,
        borderRadius: 1,
    },

    PassText: {
        height: 50,
        width: 320,
        borderWidth: 1,
        color: '#000',
        marginTop: 20,
        padding: 10,
        borderRadius: 1,
    },

    ButtonLogin: {
        marginTop: 50,
        height: 50,
        width: 260,
        borderColor:'gray',
        borderWidth:1,
        borderRadius: 5,
        backgroundColor: '#32CD32'
    },

    TextButtonLogin: {
        height: 50,
        width: 260,
        textAlign: "center",
        lineHeight: 50,
        fontSize: 16,
        color: '#000000'
    },
    ButtonCancel: {
        height: 50,
        width: 260,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
    },

});