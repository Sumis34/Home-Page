import React from 'react'
import bg from '../../../assets/images/forest.png'
import Line from '../../../components/AccentLine/AccentLine'
import Fade from 'react-reveal/Fade'


export default function philosophie() {
    return (
        <div>
            <section id="philosophie">
                <img src={bg} alt="forest" id="forest" />
                <Fade bottom >
                    <div className="content">
                        <Line />
                        <h2>Philosophie.</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quis reprehenderit non ipsam, illum facilis odit. Quibusdam cum consectetur totam veniam obcaecati commodi et repudiandae ut corrupti. Fuga, tempora deleniti.
                        </p>
                    </div>
                </Fade>
                
            </section>
        </div>
    )
}
