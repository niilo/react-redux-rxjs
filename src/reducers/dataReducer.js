import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE
} from '../constants'
const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function dataReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_DATA:
      return Object.assign({}, ...state, {data: []}, {isFetching: true})

    case FETCHING_DATA_SUCCESS:
      return Object.assign(
        {},
        ...state,
        {data: action.data},
        {isFetching: false}
      )
    /* return {
        ...state,
        isFetching: false,
        data: action.data
      } */


    case FETCHING_DATA_FAILURE:
      return Object.assign({}, ...state, {error: true}, {isFetching: false})
    /* return {
        ...state,
        isFetching: false,
        error: true
      } */


    default:
      return state
  }
}
