import React, { Component } from 'react';
import {
  Text
} from 'react-native';
import { connect } from 'react-redux';

import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list.js';
import Movie from './screens/containers/movie';
import Opciones from './screens/containers/opciones';
import BuscarSerie from './serie/containers/buscar-serie';
import Moneda from './moneda/containers/moneda';
import Billete from './moneda/containers/billete';
class AppLayout extends Component {
  async componentDidMount() {
    const categoryList = await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SEGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }
  render() {
    if (this.props.selectedMovie) {
      return <Movie />
    }
    if (this.props.selectedSerie) {
      return <BuscarSerie />
    }
    if (this.props.selectedMoneda) {
      return <Moneda />
    }
    if (this.props.selectedBillete) {
      return <Billete />
    }
    /*return (
      <Home>
        <Header />
        <BuscarSerie />
        <CategoryList />
        <SuggestionList />
      </Home>
    )*/
    return (
      <Home>
        <Header />
        <Opciones />
      </Home>
    )
  }
}

function mapStateToProps(state) {
  if (state.selectedMovie) {
    return {
      selectedMovie: state.selectedMovie,
    }
  }
  if (state.selectedSerie) {
    return {
      selectedSerie: state.selectedSerie,
    }
  }
  if (state.selectedMoneda) {
    return {
      selectedMoneda: state.selectedMoneda,
    }
  }
  if (state.selectedBillete) {
    return {
      selectedBillete: state.selectedBillete,
    }
  }
  return {
    selectedMovie: state.selectedMovie,
  }  
}

export default connect(mapStateToProps)(AppLayout);