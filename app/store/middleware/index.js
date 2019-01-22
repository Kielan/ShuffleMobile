import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { arrayMiddleware } from './array'
import { noAuthDetected } from './noAuthDetected'

export default applyMiddleware(
  thunk,
  arrayMiddleware,
  noAuthDetected,
)
