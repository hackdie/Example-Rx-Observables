import {
  NEW_SEARCH_ERROR,
  NEW_SEARCH_SUCCESS,
  REQUEST_REPOS,
} from '../constants/search'

export const onSearchSuccess = payload => {
  if ('errors' in payload) {
    return {
      type: NEW_SEARCH_ERROR,
    }
  }
  return {
    type: NEW_SEARCH_SUCCESS,
    ...payload,
  }
}

export const newSearch = query => ({ type: REQUEST_REPOS, query })
