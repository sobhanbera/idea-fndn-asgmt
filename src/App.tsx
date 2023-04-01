import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './App.css'
import {RootContainer} from './containers'
import {fetchNews} from './store'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootContainer />,
    },
])

function App() {
    const dispatch = useDispatch()

    /**
     * this function will be called when the component is mounted
     */
    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
