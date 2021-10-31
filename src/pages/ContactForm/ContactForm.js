import React, { useState, useEffect } from 'react'
import './ContactForm.scss'
import { useHistory } from 'react-router-dom'
import x from '../../assets/icons/x-mark-thin.svg'
import Fade from 'react-reveal/Fade'


export function FormFields(props) {
    const [state, setState] = useState(0);
    useEffect(() => {
        if (state > 3 || state < 0)
            setState(0);
    })

    switch (state) {
        case 1:
            return (
                <div>
                    <h1>2</h1>
                    <FormButton onClick={() => setState(state + 1)} type="btn btn-primary" label="Forward" />
                    <FormButton onClick={() => setState(state - 1)} type="btn btn-warning" label="Backwards" />
                </div>
            )
        case 2:
            return (
                <div>
                    <h1>3</h1>
                    <FormButton onClick={() => setState(state + 1)} type="btn btn-primary" label="Forward" />
                    <FormButton onClick={() => setState(state - 1)} type="btn btn-warning" label="Backwards" />
                </div>
            )
        case 3:
            return (
                <div>
                    <h1>4</h1>
                    <FormButton onClick={() => setState(state + 1)} type="btn btn-primary" label="Forward" />
                    <FormButton onClick={() => setState(state - 1)} type="btn btn-warning" label="Backwards" />
                </div>
            )
        default:
            return (
                <div>
                    <h1>1</h1>
                    <FormButton onClick={() => setState(state + 1)} type="btn btn-primary" label="Forward" />
                    <FormButton onClick={() => setState(state - 1)} type="btn btn-warning" label="Backwards" />
                </div>
            )
    }

}

export function FormButton(props) {
    return (
        <button className={props.type} onClick={props.onClick}>
            {props.label}
        </button>
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
                <h1>asd</h1>
                <FormFields />
            </div>
        </Fade>
    )
}