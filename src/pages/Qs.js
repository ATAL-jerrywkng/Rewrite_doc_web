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
            <ContentPart title={"指引及注意事項"} sx={{ overflow: 'scroll' }}>

                <Typography variant='h6' textAlign={'left'}>有關AMA的指引及注意事項，可點擊以下鏈結了解更多：</Typography>

                <Link to="http://ts.atal.com.hk/gl/" >ATAL Mobile Access（AMA）指引</Link>
                <Typography variant='h6' textAlign={'left'}>網址為: http://ts.atal.com.hk/gl/</Typography>
                {/* <CardMedia
  sx={{ height: '100%', width: '100%', margin: '0 auto' }}
  component="img"
  image={img2}
/> */}



            </ContentPart>
            

        </BasePage>
    )
}
