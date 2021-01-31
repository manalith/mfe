import { compose, createStore } from 'redux'
import { combineReducers, install } from 'redux-loop'

const reducers = combineReducers({
})

const store = createStore(reducers, {}, compose(install()));

export default store;
