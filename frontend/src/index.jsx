import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import {applyMiddleware, createSrote} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './main/routes'
import reducers from './main/reducers'

ReactDOM.render(<App />, document.getElementById('app'))

const devTools = window.__REDUX_DEVTOOLS_EXTENSIONS__
  &&  window.__REDUX_DEVTOOLS_EXTENSIONS__()

const store = applyMiddleare(multi, thunk, promise)(createSrote)(reducers, devTools)
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
, document.getElementById('app'))
 
registerServiceWorker();