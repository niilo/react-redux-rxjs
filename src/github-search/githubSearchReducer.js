import {
  GITHUB_QUERY,
  GITHUB_CANCEL_QUERY,
  GITHUB_QUERY_FULFILLED,
  GITHUB_QUERY_REJECTED
} from './githubSearchActionTypes'

const initialState = {
  data: [],
  query: '',
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function githubSearchReducer (state = initialState, action) {
  switch (action.type) {
    case GITHUB_QUERY:
      return Object.assign({}, ...state, {
        query: action.query,
        isFetching: true
      })

    case GITHUB_QUERY_FULFILLED:
      return Object.assign(
        {},
        ...state,
        {data: action.payload.response},
        {isFetching: false}
      )

    case GITHUB_QUERY_REJECTED:
      return Object.assign({}, ...state, {error: true}, {isFetching: false})

    default:
      return state
  }
}
