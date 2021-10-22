import React, { useState, useEffect } from 'react'
import '../home.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import Card from '../../../components/Cards/WorkCard'
import img from '../../../assets/images/engadin.png'
import swipe from '../../../assets/icons/swipe.png'

export default function Work() {

    //const [draged, setDraged] = useState(false);

    useEffect(() => {
        const cards = document.getElementById("work-cards");
        cards.addEventListener("mousedown", () =>{
            const swipe = document.getElementById("work-swipe");
            console.log("Darging")
            swipe.classList.remove("animation");
        });
    });

    return (
        <section id="work">
            <p>Work</p>
            <img src={swipe} alt="swipe" className="swipe animation" id="work-swipe"/>
            <div className="fade-right"></div>
            <ScrollContainer className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars" horizontal={true}>
                <div className="cards" id="work-cards">
                    <Card
                        title="Engadin"
                        description="Persönliches Projekt"
                        link="http://google.ch"
                        linkTitel="Video auf Youtube schauen"
                        img={img}
                    />
                    <Card
                        title="Engadin"
                        description="Persönliches Projekt"
                        link="http://google.ch"
                        linkTitel="Video auf Youtube schauen"
                        img={img}
                    />
                    <Card
                        title="Engadin"
                        description="Persönliches Projekt"
                        link="http://google.ch"
                        linkTitel="Video auf Youtube schauen"
                        img={img}
                    />
                    <Card
                        title="Engadin"
                        description="Persönliches Projekt"
                        link="http://google.ch"
                        linkTitel="Video auf Youtube schauen"
                        img={img}
                    />
                </div>

            </ScrollContainer>

        </section>

    )
}