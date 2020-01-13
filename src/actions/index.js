import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENTS = 'CREATE_EVENT'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}
/*
以下のコードと等価
export const readEvents = () => {
    return async dispatch => {
      const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
      dispatch({ type: READ_EVENTS, response })
    }
  }

更に以下のコードと等価
export const readEvents = () => {
    const func = async (dispatch) => {
        const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
        dispatch({ type: READ_EVENTS, response })
    }
    return func
}
*/

//入力フォームのtitleとbodyを受け取りたい
export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENTS, response })
}