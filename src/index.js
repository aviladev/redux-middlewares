import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducers from './reducers'
import async from './middlewares/async'

import App from './components/App'

const store = createStore(reducers, applyMiddleware(async))

render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
