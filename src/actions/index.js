export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


//This function is Action Creator.
export const increment = () => {
    console.log('increment() is called. send Action to Reducer.')
    return {type: INCREMENT}    //This object is Action.
}

export const decrement = () => ({
    type: DECREMENT
})

