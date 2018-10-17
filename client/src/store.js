import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, {}, enhancers )

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRoot = require('./reducers/index').default
    store.replaceReducer(nextRoot)
  })
}

export default store
