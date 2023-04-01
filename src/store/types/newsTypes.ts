// Define the shape of the state for the news reducer
export interface NewsState {
    news: News[]
    loading: boolean
    error: string | null
}

// Define the shape of the News object
export interface News {
    id: number
	userId: number
    title: string
    body: string
}

// Define the action types for fetching news
export enum FetchNewsActionTypes {
    FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST',
    FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
    FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE',
}

// Define the action creators for each action type
interface FetchNewsRequest {
    type: FetchNewsActionTypes.FETCH_NEWS_REQUEST
}

interface FetchNewsSuccess {
    type: FetchNewsActionTypes.FETCH_NEWS_SUCCESS
    payload: News[]
}

interface FetchNewsFailure {
    type: FetchNewsActionTypes.FETCH_NEWS_FAILURE
    payload: string
}

// Define a union type for all action types
export type FetchNewsAction =
    | FetchNewsRequest
    | FetchNewsSuccess
    | FetchNewsFailure
