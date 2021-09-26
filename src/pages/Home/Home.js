import React, { Component } from 'react'
import './home.scss';
import Header  from '../../components/Header/Header.js'
import Waves from '../../assets/design-elements/waves-5.svg'
//import Discord from '../../components/Discord/Discord.js'


export default class Home extends Component {
    shoot() {
        alert("Great Shot!");
    }

    render() {
        return (
            <>
                <Header />
                <img src={Waves} alt="Waves" />
            </>
        )
    }
}
