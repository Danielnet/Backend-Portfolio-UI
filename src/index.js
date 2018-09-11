import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'


const defaultState = {
     headerTitle: 'Dashboard',
     kompetanse: [],
     kunnskap: [],
     portfolio:[],
     inputValue: '',
}


const store = createStore(rootReducer, defaultState, applyMiddleware(ReduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
