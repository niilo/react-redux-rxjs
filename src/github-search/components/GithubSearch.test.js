import React from 'react'
import renderer from 'react-test-renderer'
import {GithubSearch} from './GithubSearch'
import githubSearchReducer from '../githubSearchReducer'
import {GITHUB_QUERY_FULFILLED} from '../githubSearchActionTypes'
import mockSearchResponse from './__mockData__/github-search-result.json'

it('github search result list renders correctly', () => {
  const action = {
    type: GITHUB_QUERY_FULFILLED,
    payload: {
      response: mockSearchResponse
    }
  }
  const state = githubSearchReducer(undefined, action)
  const data = {
    appData: state
  }
  const tree = renderer.create(<GithubSearch {...data} />).toJSON()
  expect(tree).toMatchSnapshot()
})
