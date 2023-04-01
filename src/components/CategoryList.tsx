// this component renders a list of categories
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Link,
    Typography,
} from '@mui/material'
import {Container} from '@mui/system'

import {Categories} from '../store'

export function CategoryList() {
    return (
        <Container
            sx={{
                display: 'flex',
            }}>
            {Categories.map(category => {
                return (
                    <Card sx={{minWidth: 275, margin: '20px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {category.name}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button size="small">
                                <Link href={`/?categoryId=${category.id}`}>
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
