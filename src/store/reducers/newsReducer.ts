import {FetchNewsAction, FetchNewsActionTypes, NewsState} from '../types'

export const initialNewsState: NewsState = {
    news: [],
    loading: true,
    error: null,
}

export const newsReducer = (
    state = initialNewsState,
    action: FetchNewsAction,
) => {
    switch (action.type) {
        case FetchNewsActionTypes.FETCH_NEWS_SUCCESS:
            return {
                ...state,
                news: action.payload,
                loading: false,
                error: null,
            }
        case FetchNewsActionTypes.FETCH_NEWS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
