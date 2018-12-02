import React from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

function Loading(props) {
  return (
    <ImageBackground 
        source={require('../../../assets/fondito.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center',flexDirection: 'row', flex: 1,}}>
        <ActivityIndicator size="large" color="#ffffff" />
        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
  titulo1:{
    fontFamily: 'Cochin',
    fontSize: 30,
    fontWeight: 'bold',
  },
  titulo2:{
    fontFamily: 'Cochin',
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  }
})

export default Loading;