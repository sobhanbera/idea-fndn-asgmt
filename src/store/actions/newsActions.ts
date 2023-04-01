import axios from 'axios'
import {Dispatch} from 'redux'
import {FetchNewsActionTypes} from '../types'

export const fetchNews = () => async (dispatch: Dispatch) => {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts',
        )
        const newData = response.data

        dispatch({
            type: FetchNewsActionTypes.FETCH_NEWS_SUCCESS,
            payload: newData,
        })
    } catch (error) {
        console.error(error)

        dispatch({
            type: FetchNewsActionTypes.FETCH_NEWS_FAILURE,
            payload: error,
        })
    }
}
