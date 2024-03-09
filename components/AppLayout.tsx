import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
            <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossOrigin="anonymous"></Script>
        </React.Fragment>
    )
}

export default AppLayout