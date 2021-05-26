import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const globalState = {
  listMovie: [],
  title: '',
  selected: '',
  loading: false,
  showPopup: false
}

// Reducer 
const rootRecucer = (state = globalState, action) => {
  if (action.type === 'GET_MOVIE_LIST') {
    return {
      ...state,
      listMovie: action.payload.data
    }
  } if (action.type === 'UPDATE_TITLE') {
    return {
      ...state,
      title: action.newTitle
    }
  } if (action.type === 'UPDATE_SELECTED') {
    return {
      ...state,
      selected: action.selectedMovie
    }
  } if (action.type === 'UPDATE_LOADING') {
    return {
      ...state,
      loading: action.loading
    }
  } if (action.type === 'UPDATE_POPUP') {
    return {
      ...state,
      showPopup: action.showPopup
    }
  }
  return state;
}

// Store
export const storeRedux = createStore(rootRecucer, applyMiddleware(thunk))