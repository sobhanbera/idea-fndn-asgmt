// main header component
import {AppBar, Container, Typography} from '@mui/material'
import React from 'react'

export interface HeaderProps {
    title: string
}

export const Header: React.FC<HeaderProps> = ({title}) => {
    return (
        <AppBar
            sx={{
                height: '65px',
                backgroundColor: '#242424',
                display: 'flex',
                alignItems: 'center',
            }}>
            <Container
                maxWidth="xl"
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        fontFamily: 'sans-serif',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                    {title}
                </Typography>
            </Container>
        </AppBar>
    )
}
