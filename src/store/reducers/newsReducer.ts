import {createSlice} from '@reduxjs/toolkit'
import {News, NewsState} from '../types'

export const initialNewsState: NewsState = {
    news: [],
    loading: true,
    error: null,
}

export const newsSlice = createSlice({
    name: 'news',
    initialState: initialNewsState,
    reducers: {
        updateNewsData: (
            state: NewsState,
            payload: {payload: News[]; type: string},
        ) => {
            return {
                ...state,
                news: payload.payload,
                loading: false,
                error: null,
            }
        },
    },
})

export const {updateNewsData} = newsSlice.actions
export default newsSlice.reducer
