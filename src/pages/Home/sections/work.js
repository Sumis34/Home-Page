import React, { useEffect } from 'react'
import '../home.scss';
import ScrollContainer from 'react-indiana-drag-scroll'
import Card from '../../../components/Cards/WorkCard'
import Line from '../../../components/AccentLine/AccentLine'
import img from '../../../assets/images/engadin.png'
import uhcg from '../../../assets/images/uhcg.png'
import ski from '../../../assets/images/ski.png'
import fpv from '../../../assets/images/fpv.png'
import zermatt from '../../../assets/images/zermatt.png'
import swipe from '../../../assets/icons/swipe.png'
import arrow from '../../../assets/icons/right_arrow.svg'
import blob from '../../../assets/design-elements/blob.svg'
import cardData from '../../../data/cards.json'


function Cards() {

    const cards = cardData.map((d) =>
        <Card
            title={d.title}
            description={d.type}
            link="http://google.ch"
            linkTitel="Video auf Youtube schauen"
            img={d.img}
            key={d.title}
        />
    );

    return (
        <>
            {cards}
        </>
    );
}

export default function Work() {

    //const [draged, setDraged] = useState(false);

    useEffect(() => {
        const cards = document.getElementById("work-cards");
        cards.addEventListener("mousedown", () => {
            const swipe = document.getElementById("work-swipe");
            swipe.classList.remove("animation");
        });
    });

    return (
        <section id="work">
            <div id="work-content">
                <Line />
                <h2>My work.</h2>
                <img src={blob} alt="..." id="work-blob" />
                <img src={swipe} alt="swipe" className="swipe animation" id="work-swipe" />
                <img src={arrow} alt="arrow" className="arrow" id="work-arrow" />
                <ScrollContainer className="scroll-container indiana-scroll-container indiana-scroll-container--hide-scrollbars" horizontal={true}>
                    <div className="cards" id="work-cards">
                        {Cards()}
                    </div>
                </ScrollContainer>
            </div>
        </section>
    )
}