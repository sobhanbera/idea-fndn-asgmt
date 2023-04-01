import {
    Button,
    Card,
    CardActions,
    CardContent,
    Container,
    Link,
    Typography,
} from '@mui/material'
import {Categories} from '../store/db'

interface SubCategoryListProps {
    categoryId?: string
}
export function SubCategoryList({categoryId}: SubCategoryListProps) {
    const subcategories = Categories.filter(
        category => category.id === categoryId,
    )[0].subcategories

    return (
        <Container
            sx={{
                display: 'flex',
            }}>
            {/* only one news category will match the exact categoryId */}
            {subcategories.map(category => {
                return (
                    <Card
                        key={category.id}
                        sx={{minWidth: 275, margin: '20px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {category.name}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small">
                                <Link
                                    href={`/?categoryId=${categoryId}&subCatId=${category.id}`}>
                                    Open Category
                                </Link>
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </Container>
    )
}
