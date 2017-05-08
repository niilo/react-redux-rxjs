import React from 'react'

import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {queryData} from './github-search/githubSearchActions'

const GithubSearchListItem = ({item}) => (
  <li>id: {item.id}, Login: {item.login}</li>
)

const GithubSearch = ({query}) => <input type='text' onChange={query} />

const GithubSearchList = ({result}) => {
  if (result.isFetching) return <p>Loading</p>

  if (result.error) return <p>Error</p>

  return (
    <ul>
      {result.data && result.data.items
        ? result.data.items.map(account => (
            <GithubSearchListItem key={account.id} item={account} />
          ))
        : null}
    </ul>
  )
}

const App = props => {
  return (
    <div className='container'>
      <GithubSearch query={props.queryData} />
      <GithubSearchList result={props.appData} />
    </div>
  )
}

const mapStateToProps = state => ({
  appData: state.githubSearchReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      queryData
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(App)
