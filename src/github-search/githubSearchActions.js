import {
  GITHUB_QUERY,
  GITHUB_CANCEL_QUERY,
  GITHUB_QUERY_FULFILLED,
  GITHUB_QUERY_REJECTED
} from './githubSearchActionTypes'

export function queryData (query) {
  return {
    type: GITHUB_QUERY,
    query: query.target.value
  }
}

export function queryFulfilled (payload) {
  return {
    type: GITHUB_QUERY_FULFILLED,
    payload
  }
}

export function queryRejected (error) {
  return {
    type: GITHUB_QUERY_REJECTED,
    error
  }
}
