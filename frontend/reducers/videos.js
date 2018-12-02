function videos(state = {}, action) {
  switch (action.type) {
    case 'SET_SEGGESTION_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_CATEGORY_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_SELECTED_MOVIE': {
      return {...state, selectedMovie: action.payload.movie}
    }
    case 'SET_SELECTED_SERIE':{
      return {...state, selectedSerie: action.payload.serie}
    }
    case 'SET_SELECTED_MONEDA':{
      return {...state, selectedMoneda: action.payload.moneda}
    }
    case 'SET_SELECTED_BILLETE':{
      return {...state, selectedBillete: action.payload.billete}
    }
    default:
      return state
  }
}

export default videos;