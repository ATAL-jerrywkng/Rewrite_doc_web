import React from 'react'
import { BasePage } from '../components/BasePage'
import { ContentPart } from '../components/ContentPart'

export const Home = () => {
    const pageInfo = {
        title: 'Home'
      }
    return (
        <BasePage {...pageInfo} NotTopBarButton>
            <ContentPart title={"Home"}></ContentPart>
        </BasePage>
       
    )
}

