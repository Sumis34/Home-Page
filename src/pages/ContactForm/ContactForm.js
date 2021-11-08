import React, { useState, useEffect } from 'react'
import './ContactForm.scss'
import { useHistory } from 'react-router-dom'
import x from '../../assets/icons/x-mark-thin.svg'
import arrow from '../../assets/icons/thin-arrow.svg'
import Fade from 'react-reveal/Fade'
import Typewriter from 'typewriter-effect'


export function FormFields(props) {
    const [state, setState] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if (state > 3 || state < 0)
            setState(0);
    }, [state])

    var Form = () => <></>;

    switch (state) {
        case 1:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Wie heisst du?</h2>
                        <input type="text" placeholder="Max Muster" value={formData.name} name="name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn backwards" icon={arrow} />
                    <FormButton onClick={() => setState(state + 1)} type="form-btn" icon={arrow} />
                </>;
            break;
        case 2:
            Form =
                <>
                    <h1>3</h1>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn" icon={arrow} />
                    <FormButton onClick={() => setState(state + 1)} type="form-btn" icon={arrow} />
                </>;
            break;
        case 3:
            Form =
                <>
                    <h1>4</h1>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn" icon={arrow} />
                    <FormButton onClick={() => setState(state + 1)} type="form-btn" icon={arrow} />
                </>;
            break;
        default:
            Form =
                <>
                    <h2 className="form-topic">Zusammen kreieren wir</h2>
                    <h1 className="from-title">
                        <Typewriter options={{
                            strings: ['Ihr Imagefilm', 'Dein Hobbyfilm', 'Ihr Werbespot', 'Ihr Wunsch!'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2000
                        }} />
                    </h1>
                    <FormButton onClick={() => setState(state + 1)} type="form-btn" label="Los geht's!" icon={arrow} />
                </>;
            break;
    }

    return (
        <Fade bottom cascade>
            {Form}
        </Fade>
    );

}

function FormButton(props) {
    return (
        <button className={props.type} onClick={props.onClick}>
            {props.label}
            <img src={props.icon} alt="icon" className="icon" />
        </button>
    )
}

export default function ContactForm() {
    const history = useHistory();

    function closeForm() {
        history.goBack();
    }

    return (
        <div className="contact-menu" >
            <Fade bottom cascade>
                <img src={x} alt="x" id="close-contact-menu" onClick={() => closeForm()} />
            </Fade>
            <div className="form-content">
                <FormFields />
            </div>
        </div>
    )
}