export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
    type: INCREMENT
})
/*       リファクタリング前
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
*/

export const decrement = () => ({
    type: INCREMENT
})

