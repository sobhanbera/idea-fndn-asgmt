import React from 'react'
import {Container} from '@mui/system'
import {useLocation} from 'react-router-dom'

import {
    CategoryList,
    CategoryTree,
    Header,
    NewsList,
    SubCategoryList,
} from '../components'

export interface RootContainerProps {}
export const RootContainer = ({}: RootContainerProps) => {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)

    const categoryId = queryParameters.get('categoryId')
    const subCatId = queryParameters.get('subCatId')

    return (
        <div className="rootApp">
            <Header title={'Idea Foundation Assignment'} />

            <Container
                sx={{
                    marginTop: '85px', // header height + 20px
                }}>
                <CategoryTree />

                <Container
                    sx={{
                        display: 'flex',
                    }}>
                    {categoryId && subCatId ? (
                        <NewsList categoryId={categoryId} subCatId={subCatId} />
                    ) : categoryId ? (
                        <SubCategoryList categoryId={categoryId} />
                    ) : (
                        <CategoryList />
                    )}
                </Container>
            </Container>
        </div>
    )
}
