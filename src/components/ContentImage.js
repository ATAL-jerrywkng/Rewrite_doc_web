import { CardMedia } from '@mui/material'
import React from 'react'

export const ContentImage = (props) => {
    return (

        <CardMedia
            sx={{
                padding: '8px 0 16px 0',
                height: {
                    xs: '100%' //, md: '500px', lg: '700px'
                },
                width: {
                    xs: '100%' //, md: '500px', lg: '700px'
                },
                margin: '0 auto',
                objectFit: 'contain',
                ...props?.sx
            }}
            image={props?.image}
            component="img"

        />
    )
}
