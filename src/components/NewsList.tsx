import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {Container} from '@mui/system'
import {Button, Card, CardActions, CardContent, Typography} from '@mui/material'

import {Categories, News, NewsState} from '../store'
import {getFilteresList} from '../utils'

interface NewsListProps {
    categoryId: string
    subCatId: string
}
export function NewsList({categoryId, subCatId}: NewsListProps) {
    // getting the fetched news from the store
    const {news, loading} = useSelector((news: NewsState) => news)

    // now we have to get the exact id of the subcategory
    // currently they are set as the assignment required
    // but we can get the exact id from the database
    // and then use it to get the news
    // const [newsControllerId, setNewsControllerId] = useState(0)
    const [newsData, setNewsData] = useState<News[]>([])

    useEffect(() => {
        const category = Categories.filter(
            category => category.id === categoryId,
        )

        // check if the category exists
        // in real database it could happen that this subcategory
        // does not exist, so we have to check it
        // but in this assignment it is not required
        if (category.length !== 0) {
            // get the subcategory
            const subCat = category[0].subcategories.filter(
                sub => sub.id === subCatId,
            )

            // same here
            if (subCat.length !== 0) {
                const newsControllerId = parseInt(subCat[0].id)
                const data = getFilteresList(news, newsControllerId)

                setNewsData(data)
            } else {
                // if the subcategory does not exist
                // we can show the user a message
                // or redirect him to the main page
                // show alert in this case
                console.error('Category not found')
            }
        } else {
            console.error('Category not found')
        }
    }, [categoryId, subCatId, news, loading])

    return (
        <div data-testid="news-cards">
            <Container>
                {newsData.map(news => (
                    <div data-testid="news-card" key={news.id}>
                        <Card sx={{minWidth: 275, margin: '20px'}}>
                            <CardContent>
                                <Typography
                                    sx={{fontSize: 20}}
                                    color="text.secondary"
                                    gutterBottom>
                                    {`ID: ${news.id}`}
                                </Typography>

                                <Typography
                                    variant="h5"
                                    component="div"
                                    color="text.primary">
                                    {news.title}
                                </Typography>

                                <Typography variant="body2">
                                    {news.body}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Button size="small">Read Later</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </Container>
        </div>
    )
}
