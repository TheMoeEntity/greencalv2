'use client'
import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Script from 'next/script'
import { SnackbarProvider } from 'notistack'

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <React.Fragment>
            <SnackbarProvider
                classes={{ containerRoot: "z-alert" }}
                anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
                <Header />
                {children}
                <Footer />
                <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossOrigin="anonymous"></Script>
            </SnackbarProvider>
        </React.Fragment>
    )
}

export default AppLayout