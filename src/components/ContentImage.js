import { CardMedia } from '@mui/material'
import React from 'react'

export const ContentImage = (props) => {
    const imageType = props?.imageType
    return (

        <CardMedia
            sx={{
                padding: '8px 0 16px 0',
                height: {
                    xs: '100%'//, sm: imageType === 'x' ? '500px' : '100%'
                },
                width: {
                    xs: '100%', sm: imageType === 'x' ? props?.xWidth : imageType === 'y' ? props?.yWidth : '100%'//, md: '500px', lg: '700px'
                },
                margin: { xs: "0", sm: imageType === 'x' ? '0' : '0 auto' },
                objectFit: 'contain',
                ...props?.sx
            }}
            image={props?.image}
            component="img"

        />
    )
}
