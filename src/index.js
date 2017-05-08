import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './configureStore'
import GithubSearch from './github-search/components/GithubSearch'
import 'preact/devtools'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <GithubSearch />
  </Provider>,
  document.getElementById('app')
)
