import React from 'react'
import waveTop from '../../../assets/design-elements/wave-1.svg'
import waveBottom from '../../../assets/design-elements/wave-2.svg'
import phone from '../../../assets/design-elements/phone-alt-solid.svg'
import email from '../../../assets/design-elements/envelope-solid.svg'
import blob from '../../../assets/design-elements/blob-gradiant.svg'
import Reveal from 'react-reveal/Reveal'
import './section.scss'

export default function contact() {
    return (
        <div>
            <section id="contact">
                <img src={blob} alt="..." id="blob" />
                <img src={waveTop} alt="wave-top" id="wave-top" />
                <div className="contact-bg">
                    <div className="contact-cont content">
                        <Reveal effect="fadeInUp">
                            <div className="contact-header">
                                <h2>Hast du eine Vision?</h2>
                                <p>In Zusammenarbeit erstellen wir einen
                                    einzigartigen Film der zu dir passt. Erreiche mich direkt via E-Mail oder Telephone, 
                                    du kannst auch direkt das Onlineformular über den button "Projekt starten" ausfüllen.</p>
                            </div>
                        </Reveal>
                        <div className="contact-info">
                            <div className="phone">
                                <img src={phone} alt="phone" className="contact-icon" />
                                <div className="info-text">
                                    <h3>Telephone</h3>
                                    <a href="tel:+41794855655" className="underline">+41 79 485 56 55</a>
                                </div>
                            </div>
                            <div className="email">
                                <img src={email} alt="email" className="contact-icon" />
                                <div className="info-text">
                                    <h3>E-mail</h3>
                                    <a href="mailto:noe.krebs@bluemail.ch" className="underline">noe.krebs@bluemail.ch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={waveBottom} alt="wave-bottom" id="wave-bottom" />
            </section>
        </div>
    )
}
