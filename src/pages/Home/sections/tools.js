import React from 'react'
import { Reveal } from 'react-reveal'
import Line from '../../../components/AccentLine/AccentLine'
import after from '../../../assets/images/grading/after-colorgrade.png'
import before from '../../../assets/images/grading/before-colorgrade.png'
import { motion, useViewportScroll, useTransform } from "framer-motion"

export default function Tools() {

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <section id="tools">
            <Reveal effect="fadeInUp">
                <div className="content" id="tool-cont">
                    <Line />
                    <h2>Tool's und skills</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quis reprehenderit non ipsam, illum facilis odit. Quibusdam cum consectetur totam veniam obcaecati commodi et repudiandae ut corrupti. Fuga, tempora deleniti.
                    </p>
                </div>
            </Reveal>
            <div className="comparison">
                <div className="img-wrapper" >

                    <img src={after} />
                </div>
                <div className="img-wrapper" id="before">
                    <img src={before} style={{ scaleY: scale }} />
                </div>
            </div>
        </section>
    )
}
