import {combineReducers} from 'redux'
//全てのReducerを結合するための機能
import count from './count'

export default combineReducers({count})
//複数のReducerを引数に持ちたい場合
//combineReducers({foo, bar, baz, ...})