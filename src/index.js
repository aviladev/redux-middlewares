import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

import reducers from './reducers'

import App from './components/App'

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
