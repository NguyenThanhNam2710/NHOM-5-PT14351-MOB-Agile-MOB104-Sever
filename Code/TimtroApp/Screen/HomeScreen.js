import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen(navigation ) {

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
      <Text>LOGO</Text>
      </View>
    
      <View style={styles.body}>
        <View style={styles.slideshow}>
            <Image style={{height:138,width:'100%', borderRadius: 15,}} source={require('../img/slide1.jpg')}/>
        </View>
        <View>
          <View style={{width:'100%',marginTop: 10, marginBottom: 20}}>
            <Text style={styles.Title}>Tin đăng</Text>
            <View style={{flexDirection: 'row',}}>
              <TouchableOpacity style={{alignItems: 'center',}}
              onPress={()=>{

              }}>
              <Image style={styles.imageItem} source={require('../img/tim_tro.png')}/>
              <Text>Tìm trọ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center',}}
              onPress={()=>{
                
              }}>
              <Image style={styles.imageItem} source={require('../img/ghep.png')}/>
              <Text>Ở ghép</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{width:'100%',marginTop: 10,}}>
            <Text style={styles.Title}>Dịch vụ</Text>
            <View style={{flexDirection: 'row',}}>
              <TouchableOpacity style={{alignItems: 'center',}}
              onPress={()=>{
                
              }}>
              <Image style={styles.imageItem} source={require('../img/logistic.png')}/>
              <Text>Vẩn chuyển</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center',}}
              onPress={()=>{
                
              }}>
              <Image style={styles.imageItem} source={require('../img/logistic.png')}/>
              <Text>Unknow</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.controler}>
        <TouchableOpacity onPress={()=>{
          alert('Trang chủ');
        }}>
      <Image style={styles.imgControler} source={require('../img/trangChu.png')}/>
       </TouchableOpacity>

       <TouchableOpacity onPress={()=>{
          alert('Thêm tin');
        }}>
      <Image style={styles.imgControler} source={require('../img/add.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{
          alert('Menu');
        }}>
      <Image style={styles.imgControler} source={require('../img/tuyChonMenu.png')}/>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   
  },
  nav: {
    width: '100%',
    height: '8.5%',
    backgroundColor: '#f3febd',
   
  },
  body: {
    width: '100%', height: '83.5%',
    backgroundColor: '#f3febd',
    alignItems: 'center',
   
  },
  controler: {
    height: '8%', width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    
  },
  imgControler: {
    marginTop: 10,
    marginRight: 40, marginLeft: 40,
    height: 30,
    width: 30,
   
  },
  slideshow: {
    marginTop: 8,
    height: 140,
    backgroundColor: '#fff',
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
   
  },
  imageItem: {
    width: 80,
    height: 80,
    marginRight: 35,
    marginLeft: 35,
  },
  Title: {
    fontSize: 20, 
    marginBottom: 10,
  }
});