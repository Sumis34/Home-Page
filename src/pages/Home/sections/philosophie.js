import bg from '../../../assets/images/forest.png'
import Line from '../../../components/AccentLine/AccentLine'
import Reveal from 'react-reveal/Reveal'

export default function philosophie() {
    return (
        <>
            <section id="philosophie">
                <img src={bg} alt="forest" id="forest" />
                <Reveal effect="fadeInUp">
                    <div className="content">
                        <div className="line-flex"><Line /></div>
                        <h2>Philosophie.</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam quis reprehenderit non ipsam, illum facilis odit. Quibusdam cum consectetur totam veniam obcaecati commodi et repudiandae ut corrupti. Fuga, tempora deleniti.
                        </p>
                    </div>
                </Reveal>
            </section>
        </>
    )
}
