import {combineReducers} from 'redux'
import githubSearchReducer from './github-search/githubSearchReducer'

const rootReducer = combineReducers({
  githubSearchReducer
})

export default rootReducer
