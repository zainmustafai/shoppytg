import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import ProductList from '../../components/ProductList/ProductList'


const HomeLayout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProductList />
        </div>
    )
}

export default HomeLayout
