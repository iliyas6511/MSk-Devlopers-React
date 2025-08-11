import React from 'react'
import Banner from '../Components/Banner'
import AreaProperty from '../Components/AreaProperty'
import LatestProperties from '../Components/LatestProperty'
import PropertyCategory from '../Components/Propertycategory'
import PremiumProperty from '../Components/PremiumProperty'
import FeaturedProperty from '../Components/FeaturedProperty'

import Testimonials from '../Components/Testimonials'
import Contactus from '../Components/Contactus'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import GoaFullyImages from '../Components/GoaFullyImages'



const Homepage = () => {
    return (
        <>
            <Banner />
            <AreaProperty />

            <LatestProperties />

            <PropertyCategory />

            <PremiumProperty />

            <FeaturedProperty />

            <GoaFullyImages />

            <Testimonials />

            <Contactus />
        </>
    )
}

export default Homepage
