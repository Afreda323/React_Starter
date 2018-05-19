import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from '../store'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={() => <h1>Hello</h1>} />
    </BrowserRouter>
  </Provider>
)

export default App
