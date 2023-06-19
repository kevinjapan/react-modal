import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../../Home/Home'
import AppHeader from '../AppHeader/AppHeader'
import AppFooter from '../AppFooter/AppFooter'


const AppLayout = () => {
    return (
        <>
            <AppHeader/>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <AppFooter/>            
        </>
    )  
}


export default AppLayout