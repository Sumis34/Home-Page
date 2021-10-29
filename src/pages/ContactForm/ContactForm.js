import React from 'react'
import './ContactForm.scss'
import { useHistory } from 'react-router-dom'
import x from '../../assets/icons/x-mark-thin.svg'
import Fade from 'react-reveal/Fade'


export function FormFields(props) {
    switch (props.state) {
        case 2:
            return (
                <div>
                    Form2
                </div>
            )
        case 3:
            return (
                <div>
                    Form3
                </div>
            )
        case 4:
            return (
                <div>
                    Form4
                </div>
            )
        default:
            return (
                <div>
                    Form1
                </div>
            )
    }

}

export function FormButton() {
    return (
        <div>

        </div>
    )
}

export default function ContactForm() {
    const history = useHistory();

    function closeMenu() {
        history.push("/");
    }

    return (
        <Fade bottom cascade>
            <div className="contact-menu" >
                <img src={x} alt="x" id="close-contact-menu" onClick={() => closeMenu()} />
                <h1>Moin</h1>
                <h1>Hud</h1>
                <h1>meee</h1>
            </div>
        </Fade>
    )
}