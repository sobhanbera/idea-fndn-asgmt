import {useCallback, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import {RootContainer} from './containers'
import {updateNewsData} from './store'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootContainer />,
    },
])

function App() {
    const dispatch = useDispatch()

    /**
     * this function will fetch the news data from the api
     * and then dispatch the action to update the store
     */
    const getNewsData = useCallback(async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
        )
        const newsData = await response.json()

        dispatch(updateNewsData(newsData))
    }, [dispatch])

    /**
     * this function will be called when the component is mounted
     */
    useEffect(() => {
        getNewsData()
    }, [getNewsData])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
