import React, { useState, useEffect } from 'react'
import './ContactForm.scss'
import { useHistory } from 'react-router-dom'
import arrow from '../../assets/icons/thin-arrow.svg'
import Fade from 'react-reveal/Fade'
import Typewriter from 'typewriter-effect'
import x from '../../assets/icons/x-mark-thin.svg'
import { motion } from 'framer-motion'
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import ValidationService from '../../services/ValidationService'
import axios from 'axios'

export function FormFields(props) {
    const SUCCESS_PAGE = 6;
    const [state, setState] = useState(0);
    const [error, setError] = useState(false);
    const baseUrl = process.env.REACT_APP_API_URL;
    const [code, setCode] = useState(0);
    const [verifyed, setVerified] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        targetGroup: 0,
        code: null
    });

    const radios = [
        { name: 'Unter 18', value: 1 },
        { name: '18-25', value: 2 },
        { name: '25-39', value: 3 },
        { name: '40-64', value: 4 },
        { name: '65+', value: 5 }
    ];

    useEffect(() => {
        if (state > 6 || state < 0)
            setState(0);
    }, [state]);

    const forwarForm = (validationMathod, value) => {

        let error = ValidationService[validationMathod](value)

        if (!error) {
            setState(state + 1)
            setError(false)
        } else {
            setError(error)
        }
    }

    const send = async (formData, success_page) => {
        const authorized = await (await axios.post(baseUrl + '/message/send/', formData)).data.authorized
        if (authorized)
            setState(success_page)
        else
            setState(state + 1)
    }

    const validateCode = (formData, success_page) => {
        console.log(formData);
        axios.post(baseUrl + '/message/verify/', { code: parseInt(formData.code), email: formData.email })
            .then(response => {
                setVerified(response.data.authorized);
                console.log(verifyed);
                send(formData, success_page);
            })
            .catch(err => {
                console.log(err);
            });;
    }

    let Form = () => <></>;

    switch (state) {
        case 1:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Wie heisst du?</h2>
                        <input type="text" placeholder="Max Muster" className={error ? "error" : ""} value={formData.name} name="name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn back" icon={arrow} />
                    <FormButton onClick={() => forwarForm("validateName", formData.name)} type="form-btn" icon={arrow} />
                </>;
            break;
        case 2:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Wie lautet dein E-Mail?</h2>
                        <input type="email" placeholder="max@muster.ch" className={error ? "error" : ""} value={formData.email} name="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn back" icon={arrow} />
                    <FormButton onClick={() => forwarForm("validateEmail", formData.email)} type="form-btn" icon={arrow} />
                </>;
            break;
        case 3:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Kurzbeschrieb deines Projektes</h2>
                        <textarea type="text" style={{ resize: "none" }} placeholder="Ich habe mir vorgestellt..." className={error ? "error" : ""} rows="10" cols="70" value={formData.message} name="message" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn back" icon={arrow} />
                    <FormButton onClick={() => forwarForm("validateMsg", formData.message)} type="form-btn" icon={arrow} />
                </>;
            break;
        case 4:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Zielgruppe</h2>
                        <ToggleButtonGroup type="radio" name="options" defaultValue={2} className="targetGroup-buttons">
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={'outline'}
                                    name="radio"
                                    value={radio.value}
                                    checked={formData.targetGroup === radio.value}
                                    onChange={(e) => setFormData({ ...formData, targetGroup: e.currentTarget.value })}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn back" icon={arrow} />
                    <FormButton onClick={() => send(formData, SUCCESS_PAGE)} type="form-btn" label="Senden!" icon={arrow} />
                </>
            break;
        case 5:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Verify{verifyed}</h2>
                        <input type="number" onChange={(e) => setFormData({ ...formData, code: e.target.value })} />
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn back" icon={arrow} />
                    <FormButton onClick={() => validateCode(formData, SUCCESS_PAGE)} type="form-btn" label="Verify" icon={arrow} />
                </>
            break;
        case 6:
            Form =
                <>
                    <label className="d-block">
                        <h2 className="from-subtitle">Success</h2>
                        <input type="number" onChange={(e) => setFormData({ ...formData, code: e.target.value })} />
                    </label>
                    <FormButton onClick={() => setState(state - 1)} type="form-btn back" icon={arrow} />
                    <FormButton onClick={() => console.log("done")} type="form-btn" label="Close" icon={arrow} />
                </>
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
        <>
            {Form}
        </>
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

    const variants = {
        inital: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    return (
        <div className="contact-menu" >
            <Fade bottom cascade>
                <img src={x} alt="x" id="close-contact-menu" className="close-btn" onClick={() => closeForm()} />
            </Fade>
            <div className="form-content">
                <motion.div
                    variants={variants}
                    inital="inital"
                    animate="animate"
                    exit="exit"
                >
                    <FormFields />
                </motion.div>
            </div>
        </div>
    )
}