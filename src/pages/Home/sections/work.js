import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../home.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import Card from '../../../components/Cards/WorkCard'
import Line from '../../../components/AccentLine/AccentLine'
import swipe from '../../../assets/icons/swipe.png'
import arrow from '../../../assets/icons/right_arrow.svg'
import blob from '../../../assets/design-elements/blob.svg'
import cardData from '../../../data/cards.json'


function Cards() {

    const history = useHistory();
    const [isOpen, setOpen] = useState(false);

    const handleToggle = (id) => {
        setOpen(!isOpen);

        history.push("/video/" + id);

        console.log("Click!")
    };

    const cards = cardData.map((d, index) =>
        <Card
            title={d.title}
            type={d.type}
            textColor={d.textColor}
            link="http://google.ch"
            linkTitel="Video auf Youtube schauen"
            img={d.img}
            key={index}
            id={index}
            onClick={handleToggle}
        />
    );

    return (
        <>
            {cards}
        </>
    );
}

export default function Work() {
    useEffect(() => {
        const cards = document.getElementById("work-cards");
        cards.addEventListener("mousedown", () => {
            removeSwipe();
        });
    }, []);

    const removeSwipe = () => {
        const swipe = document.getElementById("work-swipe");
        swipe.classList.remove("animation");
    }

    const scrollToTop = () => {
        const cardCount = cardData.length
        const scrollElement = document.querySelector("#work-content > div.scroll-container.indiana-scroll-container.indiana-scroll-container--hide-scrollbars.indiana-scroll-container.indiana-scroll-container--hide-scrollbars")
        const width = scrollElement.offsetWidth * 2
        const scrollOffset = scrollElement.scrollLeft + (width / cardCount)
        scrollElement.scrollTo({ left: scrollOffset, behavior: 'smooth' });
        removeSwipe();
    };

    return (
        <section id="work">
            <div id="work-content">
                <Line />
                <h2>My work.</h2>
                <img src={blob} alt="..." id="work-blob" className="hidden-on-mobile"/>
                <img src={swipe} alt="swipe" className="swipe animation" id="work-swipe" />
                <img src={arrow} alt="arrow" className="arrow" id="work-arrow" onClick={() => scrollToTop()} />
                <ScrollContainer id="card-scroll" className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars" horizontal={true}>
                    <div className="cards" id="work-cards">
                        {Cards()}
                    </div>
                </ScrollContainer>
            </div>
        </section>
    )
}