import { decodeFromBase64 } from 'utils/str'
import { compose, createStore } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createEncryptor from 'redux-persist-transform-encrypt'
import { reducers } from './reducers'
import { middleware } from './middleware'
import { SateManager } from '../manager'

const store = createStore(reducers, compose(middleware))
const manager = new SateManager(store)
//export const persistor = persistStore(store);

export { manager, store }
