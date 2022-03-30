import IntroImg1 from '../../Recursos/img/gastr-intro1.jpg';
import IntroImg2 from '../../Recursos/img/gastr-intro2.jpg';
import IntroImg3 from '../../Recursos/img/gastr-intro3.jpg';
import IntroImg4 from '../../Recursos/img/gastr-intro4.jpg';
import IntroText from './Intro/Intro';

const text = [
    {
        id: 1,
        text: "Madrid tiene una fuerte cultura gastronómica, con platos tradicionales que se han transcendido fronteras y se han establecido como patrimonio no sólo de la ciudad, sino de toda España."
    },
    {
        id: 2,
        text: "Platos como el cocido madrileño o la tortilla de patatas, postres y desayunos como los churros con chocolate, o incluso unas deliciosas tapas acompañando una buena cerveza en una terraza son patrimonio no sólo madrileño, sino español.",
    },
    {
        id: 3,
        text: "Ven a visitar los mejores restaurantes de Madrid y disfruta de una tradición gastronómica inigualable."
    }
]

const gallery = [
    {
        id: 1,
        img: IntroImg1
    },
    {
        id: 2,
        img: IntroImg2
    },
    {
        id: 3,
        img: IntroImg3
    },
    {
        id: 4,
        img: IntroImg4
    }
]

export default function IntrodGastro() {
    return (
        <div >
            <IntroText text={text} gallery={gallery} />
        </div>
    )
}