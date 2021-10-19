import React from 'react'
import '../home.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import Card from '../../../components/Cards/WorkCard'
import img from '../../../assets/images/engadin.png'

export default function Work() {
    return (
        <>
            <section id="work">
                <p>Work</p>
                <ScrollContainer className="scroll-container">
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
                </ScrollContainer>
            </section>
        </>
    )
}