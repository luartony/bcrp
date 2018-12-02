import React, { Component } from 'react';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import LayoutSerie from '../components/layout-serie.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';

class BuscarSerie extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.state = { denominacion: '' };
    this.state ={ isLoading: true};
  }

  closeSerie = () => {
    this.props.dispatch({
      type:'SET_SELECTED_SERIE',
      payload:{
        serie: null,
      }
    })
  }
  
  consultaSerie = () => {
    return fetch('http://ec2-34-220-86-67.us-west-2.compute.amazonaws.com/valida-billete', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "denominacion":"20",
        "numeracion":this.state.text//"A9638214J"
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.mensaje,
      }, function(){
        Alert.alert(
          'Consulta Numero de Serie - BCRP',
          'Serie:'+ this.state.text +'\nDenominacion:'+this.state.denominacion+'\n'+this.state.dataSource,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          { cancelable: false }
        );
      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  render() {
    let pic = {
      uri: 'https://i1.wp.com/oculaserperu.com/wp-content/uploads/2018/09/BCRP.png?resize=300%2C243&ssl=1'
    };    

    return (
      <LayoutSerie>
        <Header>
          <Close 
            onPress={this.closeSerie}
          />
        </Header>
        <View style={styles.container}>        
          <View style={styles.containerLogo}>
            <Image source={pic} style={{width: 210, height: 110}}/>                  
            
          </View>  
          <View style={styles.containerItem}>          
            <Text style={styles.welcome}>
              Ingrese el Número de Serie
            </Text>
            <TextInput
            style={{height: 40, width: 200, borderColor: '#1A4E7D', borderWidth: 1, margin: 30}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            />
            <Text style={styles.welcome}>
              Ingrese la Denominación
            </Text>
            <TextInput
            style={{height: 40, width: 200, borderColor: '#1A4E7D', borderWidth: 1, margin: 30}}
            onChangeText={(denominacion) => this.setState({denominacion})}
            value={this.state.denominacion}
            />
            <Button
              onPress={this.consultaSerie}
              title="Consultar"
              color="#1A4E7D"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>  
        </View>
      </LayoutSerie>        
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
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerItem: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
})

export default connect(null)(BuscarSerie);