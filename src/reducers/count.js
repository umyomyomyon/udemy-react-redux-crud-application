import {INCREMENT, DECREMENT} from '../actions'

//状態の初期値を定義する(オブジェクトとして)
//初期状態のオブジェクトを入れる変数名はinitialState
const initialState = {value: 0}
console.log(`initialState was set. value = ${initialState.value}`)

//countReducerを定義
//reducers/index.jsに渡せるようにexportする
//関数として定義する
//引数は２つ
//第一引数であるstateはデフォルト時には状態を持っていないので
//デフォルト引数としてinitialStateを渡してあげる
export default (state = initialState, action) => {
    console.log(`----------reducers/count.js----------`)
    console.log(`count state is ${JSON.stringify(state)}`)
    console.log(`actionType is ${JSON.stringify(action.type)}`)
    //受け取ったactionのtypeに応じて状態を変更して, その結果をreturnで返していく
    switch (action.type) {
        case INCREMENT:
            return {value: state.value + 1}
        case DECREMENT:
            return {value: state.value - 1}
        default:
            return state    
            /*
            想定されたtypeでなければstateをそのまま返す
            つまり, stateの変更は行われない
            */
    }

}
