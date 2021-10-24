import React from 'react'
import waveTop from '../../../assets/design-elements/wave-1.svg'
import waveBottom from '../../../assets/design-elements/wave-2.svg'
import phone from '../../../assets/design-elements/phone-alt-solid.svg'
import email from '../../../assets/design-elements/envelope-solid.svg'
import './contact.scss'

export default function contact() {
    return (
        <div>
            <section id="contact">
                <img src={waveTop} alt="wave-top" id="wave-top" />
                <div className="contact-bg">
                    <div className="contact-cont">
                        <div className="contact-header">
                            <h2>Hast du eine Vision?</h2>
                            <p>In Zusammenarbeit erstellen wir einen
                                einzigartigen Film der zu dir passt. </p>
                        </div>
                        <div className="contact-info">
                            <div className="phone">
                                <img src={phone} alt="phone" className="contact-icon" />
                                <h3>Telephone</h3>
                                <a href="#">Hallo</a>
                            </div>
                            <div className="email">
                                <img src={email} alt="email" className="contact-icon" />
                                <h3>E-mail</h3>
                                <a href="#">email</a>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={waveBottom} alt="wave-bottom" id="wave-bottom" />
            </section>
        </div>
    )
}
