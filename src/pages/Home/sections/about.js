import React from 'react'
import Line from '../../../components/AccentLine/AccentLine'
import Reveal from 'react-reveal/Reveal'
import noe from '../../../assets/images/noe.png'
import Moment from 'react-moment'

export default function About() {
    return (
        <>
            <section id="about-me">
                <Reveal effect="fadeInUp">
                    <div className="content" id="about-me-cont">
                        <div className="text">
                            <Line />
                            <h2>über mich.</h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quis reprehenderit non ipsam, illum facilis odit. Quibusdam cum consectetur totam veniam obcaecati commodi et repudiandae ut corrupti. Fuga, tempora deleniti.
                                <Moment fromNow>2003-30-05</Moment>
                            </p>
                        </div>
                        <div className="image">
                            <img src={noe} alt="noe" id="img-noe"/>
                        </div>
                    </div>
                </Reveal>
            </section>
        </>
    )
}
