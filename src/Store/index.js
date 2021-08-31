import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from '../Reducers/index'

const persistConfig = {
  key: 'root',
  storage,
}

const compose = composeWithDevTools(applyMiddleware(thunk))
const persistedReducer = persistReducer(persistConfig, rootReducer, compose)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)

//   return { store, persistor }
// }

const storePersistor = () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
  
    return { store, persistor }
  }

  export default storePersistor;