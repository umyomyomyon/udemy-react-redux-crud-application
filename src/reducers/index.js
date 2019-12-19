import {combineReducers} from 'redux'
//全てのReducerを結合するための機能
import count from './count'
import hoge from './hogeReducer'


export default combineReducers({count, hoge})
//複数のReducerを引数に持ちたい場合
//combineReducers({foo, bar, baz, ...})