import {
  NEW_SEARCH_ERROR,
  NEW_SEARCH_SUCCESS,
  REQUEST_REPOS,
} from '../constants/search'

const initialState = {
  items: [],
  loading: true,
  error: false,
  query: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_SEARCH_SUCCESS: {
      return { ...state, items: action.items, loading: false }
    }
    case NEW_SEARCH_ERROR: {
      return { ...state, items: [], error: true, loading: false }
    }
    case REQUEST_REPOS: {
      return { ...state, loading: true, query: action.query }
    }
    default: {
      return state
    }
  }
}
