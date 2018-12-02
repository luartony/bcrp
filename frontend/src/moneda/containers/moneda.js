import React, { Component } from 'react';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import LayoutMoneda from '../components/layout-moneda.js';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { connect } from 'react-redux';

class Moneda extends Component {
  closeSerie = () => {
    this.props.dispatch({
      type:'SET_SELECTED_MONEDA',
      payload:{
        moneda: null,
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  viewMoneda = () => {
    Alert.alert(
      'Moneda de Diez céntimos ( S/. 0.10)',
      'Esta moneda cuenta en el reverso con diseños encontrados en la ciudadela precolombina de “Chan Chan” ubicada en la ciudad de Trujillo, al norte del Perú.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  viewMoneda2 = () => {
    Alert.alert(
      'Moneda de Veinte céntimos (S/. 0.20)',
      'Esta moneda cuenta en el reverso con diseños encontrados en la ciudadela precolombina de “Chan Chan” ubicada en la ciudad de Trujillo, al norte del Perú.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  viewMoneda3 = () => {
    Alert.alert(
      'Moneda de cincuenta céntimos (S/.0.50)',
      'Esta moneda presenta en el reverso un tallo curvo con hojas de laurel y roble entremezcladas y el logotipo de la Casa Nacional de Moneda sobre un diseño geométrico de líneas verticales. En el anverso lleva el Escudo de Armas del Perú y alrededor laleyenda “BANCO CENTRAL DE RESERVA DEL PERÚ” y el año de acuñación.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  viewMoneda4 = () => {
    Alert.alert(
      'Monedas de Un nuevo sol.(S/. 1.00)',
      'En el anverso se muestra en el centro el Escudo de Armas del Perú y alrededor la leyenda “Banco Central de Reserva del Perú”, el año de acuñación y un polígono inscrito de ocho lados. En el reverso, en la parte central, se muestra la denominación de la moneda en número (“1”), el logotipo de la “Marca País Perú” y debajo la unidad monetaria Nuevo Sol. También se muestra el logotipo de la Casa Nacional de Moneda sobre un diseño geométrico de líneas verticales, así como dos tallos curvos de laurel y roble entremezclados.',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  viewMoneda5 = () => {
    Alert.alert(
      'Monedas de Dos nuevos soles.(S/. 2.00)',
      'Estas monedas de Dos nuevos soles fueron acuñados en forma paralela con las monedas de Cinco nuevos soles.En el caso de la  moneda de S/. 2, en el reverso se aprecia la denominación en números y “El Colibrí” de las Líneas de Nasca ubicados en la ciudad de Ica, al sur de Lima. El borde o canto de la moneda tiene un estriado continuo',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  viewMoneda6 = () => {
    Alert.alert(
      'Monedas de Cinco nuevos soles (S/. 5.00)',
      'La moneda de dinco nuevos soles actual que conocemos empezó a ser acuñada y puesta en circulación el octubre 2010, usando las mismas iconografías de su antecesor pero con un diseño mucho más elegante , más estilizado',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {
    let pic = {
      uri: 'https://i1.wp.com/oculaserperu.com/wp-content/uploads/2018/09/BCRP.png?resize=300%2C243&ssl=1'
    };

    return (
      <LayoutMoneda>
        <Header>
          <Close 
            onPress={this.closeSerie}
          />
        </Header>
        <View style={styles.container}>
            <View style={{ flex: 1,alignItems: 'center',justifyContent: 'center',}}>
                <Text style={styles.welcome}>
                  Escoge una
                </Text>
                <Text style={styles.welcome}>
                  moneda
                </Text>
            </View>
            <View style={{ flex: 2}}>
                <View style={{ flexDirection: 'row'}}>

                    <View style={styles.monedaFlex}>
                       <TouchableOpacity
                          style={styles.button}
                          onPress={()=> { this.viewMoneda() }}
                        >
                        <Image
                            style={{width: 90, height: 90, resizeMode: 'contain'}}
                                source={require('../../../assets/moneda1.jpg')}
                        />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.monedaFlex}>
                       <TouchableOpacity
                          style={styles.button}
                          onPress={()=> { this.viewMoneda2() }}
                        >
                        <Image
                            style={{width: 90, height: 90, resizeMode: 'contain'}}
                                source={require('../../../assets/moneda2.jpg')}
                        />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.monedaFlex}>
                       <TouchableOpacity
                          style={styles.button}
                          onPress={()=> { this.viewMoneda3() }}
                        >
                        <Image
                            style={{width: 90, height: 90, resizeMode: 'contain'}}
                                source={require('../../../assets/moneda3.jpg')}
                        />
                        </TouchableOpacity> 
                    </View>
                    
                </View>
                <View style={{ flexDirection: 'row'}}>

                    <View style={styles.monedaFlex}>
                       <TouchableOpacity
                          style={styles.button}
                          onPress={()=> { this.viewMoneda4() }}
                        >
                        <Image
                            style={{width: 90, height: 90, resizeMode: 'contain'}}
                                source={require('../../../assets/moneda4.jpg')}
                        />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.monedaFlex}>
                       <TouchableOpacity
                          style={styles.button}
                          onPress={()=> { this.viewMoneda5() }}
                        >
                        <Image
                            style={{width: 90, height: 90, resizeMode: 'contain'}}
                                source={require('../../../assets/moneda5.jpg')}
                        />
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.monedaFlex}>
                       <TouchableOpacity
                          style={styles.button}
                          onPress={()=> { this.viewMoneda6() }}
                        >
                        <Image
                            style={{width: 90, height: 90, resizeMode: 'contain'}}
                                source={require('../../../assets/moneda6.jpg')}
                        />
                        </TouchableOpacity> 
                    </View>
                    
                </View>
            </View>
        </View>
      </LayoutMoneda>        
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
  monedaFlex:{
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

export default connect(null)(Moneda);