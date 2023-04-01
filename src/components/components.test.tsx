import React from 'react'
import {render, screen} from '@testing-library/react'

import {Header} from './Header'
import {NewsList} from './NewsList'
import {SubCategoryList} from './SubCategoryList'
import {Provider} from 'react-redux'
import {RootStore} from '../store'
import {configureStore} from '@reduxjs/toolkit'

test('renders header', () => {
    render(<Header title={'header'} />)

    const linkElement = screen.getByText(/header/i)
    expect(linkElement).toBeInTheDocument()
})

test('renders subcategory', () => {
    render(<SubCategoryList categoryId="1" />)

    const linkElement = screen.getByText(/Subcategory 1-1/i)
    expect(linkElement).toBeInTheDocument()
})

test('renders newscard', () => {
    render(
        <Provider store={RootStore}>
            <NewsList categoryId="1" subCatId="1" />
        </Provider>,
    )

    const newsCards = screen.getByTestId('news-cards')
    expect(newsCards).toBeInTheDocument()
})

test('renders invalid categoryId newscard', () => {
    render(
        <Provider store={RootStore}>
            <NewsList categoryId="1" subCatId="2" />
        </Provider>,
    )
})

test('renders invalid subCatId newscard', () => {
    render(
        <Provider store={RootStore}>
            <NewsList categoryId="3" subCatId="3" />
        </Provider>,
    )
})
