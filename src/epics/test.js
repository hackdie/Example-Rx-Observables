import 'rxjs'

export const pingEpic = action$ =>
  action$
    .filter(action => action.type === 'PING')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'PONG' })
