import { NEW_FAVORITE, REMOVE_FAVORITE } from '../constants/favorite'

export const removeFavorite = id => ({ type: REMOVE_FAVORITE, id })
export const addFavorite = item => ({ type: NEW_FAVORITE, item })
