import { remove } from 'lodash'

import { NEW_FAVORITE, REMOVE_FAVORITE } from '../constants/favorite'

const initialState = {
  items: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_FAVORITE: {
      const items = [...state.items]
      items.push(action.item)
      return { ...state, items }
    }
    case REMOVE_FAVORITE: {
      const items = [...state.items]
      const { id } = action

      remove(items, it => it.id === id)

      return { ...state, items }
    }
    default: {
      return state
    }
  }
}
