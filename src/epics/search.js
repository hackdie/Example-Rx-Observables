import 'rxjs'
import { Observable } from 'rxjs/Observable'

import { onSearchSuccess } from '../actions/search'
import { NEW_SEARCH_ERROR } from '../constants/search'
import { BASE_ULR } from '../constants/app'

import fetch from '../actions/api'

const filter = '&sort=stars'

export const searchRepos = action$ =>
  action$.ofType('REQUEST_REPOS').mergeMap(action => {
    const obsRepos = Observable.from(
      fetch.get(`${BASE_ULR}/search/repositories?q=${action.query}${filter}`)
    )

    return obsRepos
      .map(onSearchSuccess)
      .catch(error => Observable.of({ type: NEW_SEARCH_ERROR, error }))
  })

export const a = () => {}
