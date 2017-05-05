import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {FETCHING_DATA} from './constants'
import {getDataSuccess, getDataFailure} from './actions'
import getPeople from './api'

const fetchUserEpic = action$ =>
  action$
    .ofType(FETCHING_DATA)
    .mergeMap(action =>
      Observable.fromPromise(getPeople())
        .map(response => getDataSuccess(response))
        .catch(error => Observable.of(getDataFailure(error)))
    )

export default fetchUserEpic
