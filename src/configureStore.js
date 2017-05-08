import {createStore, applyMiddleware} from 'redux'
import rootReducer from './rootReducer'

import {createEpicMiddleware} from 'redux-observable'
import autoCompleteEpic from './github-search/githubSearchEpic'

const epicMiddleware = createEpicMiddleware(autoCompleteEpic)

export default function configureStore () {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(epicMiddleware)
  )
  return store
}
