import React, { Component } from 'react';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import LayoutBillete from '../components/layout-billete.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
  WebView
} from 'react-native';
import { connect } from 'react-redux';

class Billete extends Component {
  closeSerie = () => {
    this.props.dispatch({
      type:'SET_SELECTED_BILLETE',
      payload:{
        billete: null,
      }
    })
  }  
  
  render() {
    return (
      <LayoutBillete>
        <Header>
          <Close 
            onPress={this.closeSerie}
          />
        </Header>
        
          <WebView
            source={{uri: 'https://www.thinglink.com/scene/708371069974609920?buttonSource=viewLimits'}}
            style={{marginTop: 20}}
          />
        
      </LayoutBillete>        
    )
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  BilleteFlex:{
    padding: 10,
  },  
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  boton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',    
    padding: 5
  }
  
})

export default connect(null)(Billete);