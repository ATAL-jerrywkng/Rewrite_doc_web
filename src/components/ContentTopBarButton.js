import { Button } from '@mui/material';
import React from 'react';

export const ContentTopBarButton = (props) => {
    return (
        <Button
            variant="contained"
            size="small"
            sx={{
                backgroundColor: 'white',
                color: 'orange',
                padding: '4px',
                minWidth: 'auto',
                marginLeft: '8px',
                '&:hover': {
                    backgroundColor: 'rgba(245, 157, 39, 0.41)', color: 'white'
                }
            }}
            {...props}
        >{props.children}</Button>
    )
}
