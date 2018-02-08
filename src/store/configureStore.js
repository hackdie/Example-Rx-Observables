import { createLogger } from 'redux-logger'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { applyMiddleware, compose, createStore } from 'redux'

import combineReducers from '../reducers/combine'
import { pingEpic } from '../epics/test'

const rootEpic = combineEpics(pingEpic)

const loggerMiddleware = createLogger()
const epicMiddleware = createEpicMiddleware(rootEpic)

const createStoreWithMiddleware = compose(
  applyMiddleware(loggerMiddleware, epicMiddleware)
)

const store = createStore(combineReducers, createStoreWithMiddleware)

export default store
