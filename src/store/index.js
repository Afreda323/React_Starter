import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index.js'
import reducer from '../reducers'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
