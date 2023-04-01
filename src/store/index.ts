import {createStore, combineReducers, applyMiddleware, Store} from 'redux'
import thunk from 'redux-thunk'
import {newsReducer} from './reducers'
import {NewsState} from './types'
import {RootStateType} from './types/store'

const middleware = [thunk]

const rootReducer = combineReducers<RootStateType>({
    news: newsReducer,

})

const store = createStore(rootReducer, applyMiddleware(...middleware))

export {rootReducer as RootReducer, store as RootStore}

export * from './actions'
export * from './reducers'
export * from './db'
export * from './types'
