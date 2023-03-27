import React from 'react'
import Navbar from "../Layout/Navbar"
import Shaping from '../Layout/Shaping' // mise en forme 100px à droite & gauche
import Banner from '../Components/Banner'
import Footer from "../Layout/Footer"
import Logements from '../Components/Logements'
import BannerHome from '../Components/BannerHome'

import "../Styles/Home.css"

function Home() {
    return (
        <div role="main">
            <Shaping>
                <Navbar />
                <Banner>
                    <BannerHome />
                </Banner>
                <Logements />
            </Shaping>
            <Footer />
        </div>
    )
}

export default Home