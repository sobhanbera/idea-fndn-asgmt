import React from 'react'
import {render, screen} from '@testing-library/react'

import {Provider} from 'react-redux'
import App from './App'
import {RootStore} from './store'

test('renders app', () => {
    render(
        <Provider store={RootStore}>
            <App />
        </Provider>,
    )

    const linkElement = screen.getByText(/idea foundation assignment/i)
    expect(linkElement).toBeInTheDocument()
})
