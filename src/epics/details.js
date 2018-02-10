import 'rxjs'
import { Observable } from 'rxjs/Observable'
import fetch from '../actions/api'
import { BASE_ULR } from '../constants/app'

export const getRepoDetails = (owner, name) => {
  const subscribersUrl = `${BASE_ULR}/repos/${owner.login}/${name}/subscribers`
  const issuesUrl = `${BASE_ULR}/repos/${owner.login}/${name}/issues/events`

  const obsSubs = Observable.from(fetch.get(subscribersUrl))
  const obsIssues = Observable.from(fetch.get(issuesUrl))

  return obsSubs
    .concatMapTo(obsIssues, (subscribers, issues) => ({
      subscribers,
      issues,
    }))
    .map(itm => {
      itm.subscribers = itm.subscribers.splice(0, 10)
      itm.issues = itm.issues.splice(0, 15)
      return itm
    })
}

export const a = () => {}
