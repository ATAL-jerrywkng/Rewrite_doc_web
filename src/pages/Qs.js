import React from 'react'
import { BasePage } from '../components/BasePage'
import { CardMedia, Typography } from '@mui/material'


import img3 from '../asserts/summary.png'
import { ContentPart } from '../components/ContentPart';
import { Link } from 'react-router-dom';

export const Qs = () => {
    const pageInfo = {
        title: '指引及注意事項'
    }
    return (

        <BasePage  {...pageInfo}>
            <ContentPart title={"Cover"} sx={{ overflow: 'scroll' }}>

                <CardMedia
                    sx={{ height: '500px', width: '250px', margin: '0 auto' }}
                    image={img3}
                />

                <Typography variant='h6' textAlign={'center'}>有關AMA的指引及注意事項，可點擊以下鏈結了解更多：</Typography>

                <Link to="http://ts.atal.com.hk/site" >http://ts.atal.com.hk/site</Link>
                <Typography variant='h6' textAlign={'center'}>有關AMA的指引及注意事項，可點擊以下鏈結了解更多：</Typography>
                {/* <CardMedia
  sx={{ height: '100%', width: '100%', margin: '0 auto' }}
  component="img"
  image={img2}
/> */}



            </ContentPart>
            <div>Qs24242343</div>
        </BasePage>
    )
}
