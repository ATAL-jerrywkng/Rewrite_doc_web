import React from 'react'
import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Menu } from './menu/Menu'

// layout components


export const LayoutProvider = (props) => {
    return (
        <>
            <Header />
            <Menu />
            {props.children}
            <Footer />
        </>
    )
}
