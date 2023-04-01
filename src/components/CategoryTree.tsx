// this component shows the category tree structure
import React from 'react'
import {Link, Typography} from '@mui/material'
import {Container} from '@mui/system'
import {useLocation} from 'react-router-dom'

export const CategoryTree: React.FC<{}> = ({}) => {
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)

    const categoryId = queryParameters.get('categoryId')
    const subCategoryId = queryParameters.get('subCatId')

    return (
        <Container
            sx={{
                display: 'flex',
            }}>
            <Link href="/">
                <Typography>Categories</Typography>
            </Link>

            {categoryId && (
                <>
                    <Typography sx={{mx: 1}}>/</Typography>

                    <Link href={`?categoryId=${categoryId}`}>
                        <Typography>Category - {categoryId}</Typography>
                    </Link>
                </>
            )}

            {subCategoryId && (
                <>
                    <Typography sx={{mx: 1}}>/</Typography>

                    <Link
                        href={`?categoryId=${categoryId}&subCatId=${subCategoryId}`}>
                        <Typography>Sub Category - {subCategoryId}</Typography>
                    </Link>
                </>
            )}
        </Container>
    )
}
