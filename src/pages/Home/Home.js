import React from 'react'
import './home.scss';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Work from './sections/work'
import Contact from './sections/contact'
// import Waves from '../../assets/design-elements/waves-5.svg';
// import bg from '../../assets/videos/FebruarWeb-1.m4v'
//import Discord from '../../components/Discord/Discord.js'


export default function Home() {
    return (
        <>
            <Header />
            {/* <img src={Waves} alt="Waves" /> */}
            <Work />
            <Contact />
            <div className="home" id="home"></div>
            <Footer />
        </>
    )
}
