const initialState = {value: 0}

export default (state = initialState, action) => {
    console.log(`----------reducers/hogeReducer.js----------`)
    console.log(`hogeState is ${JSON.stringify(state)}`)
    console.log(`actionType is ${JSON.stringify(action.type)}`)
    switch(action.type) {
        default:
            console.log(`test switch case is default`)
            return state
    }
}