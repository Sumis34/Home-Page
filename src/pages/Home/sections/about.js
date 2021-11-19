import React from 'react'
import Line from '../../../components/AccentLine/AccentLine'
import Reveal from 'react-reveal/Reveal'

export default function About() {
    return (
        <>
            <section id="about-me">
                <Reveal effect="fadeInUp">
                    <div className="content">
                        <Line />
                        <h2>über mich.</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quis reprehenderit non ipsam, illum facilis odit. Quibusdam cum consectetur totam veniam obcaecati commodi et repudiandae ut corrupti. Fuga, tempora deleniti.
                        </p>
                    </div>
                </Reveal>
            </section>
        </>
    )
}
