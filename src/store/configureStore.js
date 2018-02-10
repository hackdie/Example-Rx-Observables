import { createLogger } from 'redux-logger'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { applyMiddleware, compose, createStore } from 'redux'

import combineReducers from '../reducers/combine'
import { searchRepos } from '../epics/search'

const rootEpic = combineEpics(searchRepos)

const loggerMiddleware = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic)

const createStoreWithMiddleware = compose(applyMiddleware(epicMiddleware))

const store = createStore(combineReducers, createStoreWithMiddleware)

store.dispatch({ type: 'REQUEST_REPOS', query: 'react-native-show-case' })

export default store
