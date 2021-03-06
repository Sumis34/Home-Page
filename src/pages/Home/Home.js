import React from 'react'
import './home.scss';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import Work from './sections/work'
import Contact from './sections/contact'
import Philosophie from './sections/philosophie'
import About from './sections/about'
import ContactMenu from '../../components/ContactMenu/ContactMenu'
import Navbar from '../../components/Navbar/Navbar'
import Tools from './sections/tools';
// import Waves from '../../assets/design-elements/waves-5.svg';
// import bg from '../../assets/videos/FebruarWeb-1.m4v'
//import Discord from '../../components/Discord/Discord.js'


export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            {/* <img src={Waves} alt="Waves" /> */}
            <Work />
            <Philosophie />
            <Contact />
            <About />
            <Tools/>
            <div className="home" id="home"></div>
            <ContactMenu />
            <Footer />
        </>
    )
}
