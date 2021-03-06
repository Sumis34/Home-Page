import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './ContactMenu.scss';

export function ContactButton(props) {
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            const btn = document.getElementById("contact-btn");
            if (btn)
                btn.classList.toggle("hidden", window.scrollY < 100);
        });
    });

    return (
        <button className="primary hidden" id="contact-btn" onClick={props.onClick}>
            Projekt starten?👋
        </button>
    )
}

export default function ContactMenu() {
    const [isOpen, setOpen] = useState(false);
    const history = useHistory();

    const handleToggle = () => {
        setOpen(!isOpen);

        setTimeout(function () {
            history.push("/contact-form");
        }, 700);
    };

    return (
        <div>
            <ContactButton onClick={handleToggle} />
            <div className={`transition-circle ${isOpen ? "open" : ""}`} id="contact-circle"></div>
        </div>
    )
}
