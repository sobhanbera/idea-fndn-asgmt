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

// external props needed to test this component
interface RootContainerProps {
    customCategoryId?: string
    customSubCatId?: string
}
export const RootContainer = ({
    customSubCatId,
    customCategoryId,
}: RootContainerProps) => {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)

    const categoryId = queryParameters.get('categoryId') || customCategoryId
    const subCatId = queryParameters.get('subCatId') || customSubCatId

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
                        <div data-testid="news-cards">
                            <NewsList
                                categoryId={categoryId}
                                subCatId={subCatId}
                            />
                        </div>
                    ) : categoryId ? (
                        <div data-testid="sub-category-list">
                            <SubCategoryList categoryId={categoryId} />
                        </div>
                    ) : (
                        <div data-testid="category-list">
                            <CategoryList />
                        </div>
                    )}
                </Container>
            </Container>
        </div>
    )
}
