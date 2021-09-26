import React, { Component } from 'react'
import './home.scss';
import Header  from '../../components/Header/Header.js'
//import Discord from '../../components/Discord/Discord.js'


export default class Home extends Component {
    shoot() {
        alert("Great Shot!");
    }

    render() {
        return (
            <>
                <Header />
                <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdc88"></stop><stop offset="95%" stop-color="#32ded488"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,200 0,200 C 86.88038277511961,173.61722488038276 173.76076555023923,147.23444976076556 273,146 C 372.2392344497608,144.76555023923444 483.8373205741626,168.6794258373206 572,162 C 660.1626794258374,155.3205741626794 724.8899521531101,118.04784688995215 825,138 C 925.1100478468899,157.95215311004785 1060.6028708133972,235.1291866028708 1169,255 C 1277.3971291866028,274.8708133971292 1358.6985645933014,237.4354066985646 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#002bdcff"></stop><stop offset="95%" stop-color="#32ded4ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,400 0,400 C 132.5263157894737,410.4976076555024 265.0526315789474,420.99521531100476 339,408 C 412.9473684210526,395.00478468899524 428.31578947368416,358.51674641148327 524,356 C 619.6842105263158,353.48325358851673 795.6842105263158,384.9377990430622 913,381 C 1030.3157894736842,377.0622009569378 1088.9473684210527,337.73205741626793 1167,335 C 1245.0526315789473,332.26794258373207 1342.5263157894738,366.13397129186603 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
            </>
        )
    }
}
