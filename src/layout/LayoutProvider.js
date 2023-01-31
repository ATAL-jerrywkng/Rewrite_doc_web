import React from 'react'

// layout components
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Content } from './content/Content'


export const LayoutProvider = (props) => {
    return (
        <>
            <Header />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </>
    )
}
