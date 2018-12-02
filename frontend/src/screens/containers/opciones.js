import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}

class Opciones extends Component {
  
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  viewMoneda = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_MONEDA',
      payload: {
        moneda: '1',
      }
    })
  }

  viewBillete = () => {
    this.props.dispatch({
      type: 'SET_SELECTED_SERIE',
      payload: {
        serie: '1',
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titulo}>
          <Image
            source={require('../../../assets/bcrpLogo.png')}
          />
        </View>
        <View style={styles.botones}>            
          
          <View style={styles.container}>
		    <TouchableOpacity
		      style={styles.button}
		      onPress={()=> { this.viewMoneda() }}
		    >
	         <Text style={{color: '#1A4E7D', fontSize: 25}} > Monedas </Text>
		     <Image
	            source={require('../../../assets/moneda.png')}
	            style={styles.moneda}
	          />	
	        </TouchableOpacity>
	      </View>

	      <View style={styles.container}>
		    <TouchableOpacity
		      style={styles.button}
		      onPress={()=> { this.viewBillete() }}
		    >
	         <Text style={{color: '#1A4E7D', fontSize: 25}} > Billetes </Text>
		     <Image
	            source={require('../../../assets/billete.jpeg')}
	            style={styles.billete}
	          />	
	        </TouchableOpacity>
	      </View>
          <View style={styles.boton}>            
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  moneda:{
  	width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  billete:{
  	width: 150,
    height: 90,
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titulo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },  
  botones: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  boton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    alignItems: 'center',    
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
})

export default connect(mapStateToProps)(Opciones)