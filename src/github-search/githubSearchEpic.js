import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/takeUntil'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/retry'
import 'rxjs/add/observable/of'

import {
  GITHUB_QUERY,
  GITHUB_CANCEL_QUERY,
  GITHUB_QUERY_FULFILLED,
  GITHUB_QUERY_REJECTED
} from './githubSearchActionTypes'

import {queryFulfilled, queryRejected} from './githubSearchActions'

const autoCompleteEpic = (action$, store) =>
  action$
    .ofType(GITHUB_QUERY)
    .debounceTime(500)
    .switchMap(action =>
      Observable.ajax('https://api.github.com/search/users?q=' + action.query)
    )
    .map(results => queryFulfilled(results))
    .retry()
    .takeUntil(action$.ofType(GITHUB_CANCEL_QUERY))
    .catch(error => {
      return Observable.of(queryRejected(error))
    })

export default autoCompleteEpic
