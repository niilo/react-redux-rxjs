import {createStore, applyMiddleware} from 'redux'
import app from './reducers/rootReducer'

import {createEpicMiddleware} from 'redux-observable'
import fetchUserEpic from './epic'

const epicMiddleware = createEpicMiddleware(fetchUserEpic)

export default function configureStore () {
  const store = createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(epicMiddleware)
  )
  return store
}
