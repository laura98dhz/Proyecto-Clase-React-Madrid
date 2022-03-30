import PalacioReal from '../Recursos/img/PalacioReal.jpg';
import Matadero from '../Recursos/img/matadero.jpg';
import EstacionFantasmaDeChamberi from '../Recursos/img/EstacionFantasmaChamberi.jpg';
import PuertaDeAlcala from '../Recursos/img/PuertaAlcala.jpg';
import TeatroReal from '../Recursos/img/TeatroReal.jpg';
import CatedralDeLaAlmudena from '../Recursos/img/CatedralAlmudena.jpg';
import CuatroTorres from '../Recursos/img/CuatroTorres.jpg';
import PlazaDeEspaña from '../Recursos/img/PlazaEspaña.jpg';
import PlazaMayor from '../Recursos/img/PlazaMayor.jpg';

const OtrasVisitasUno = [
    {
        'nombre': PalacioReal,
        'texto': 'Palacio Real',
        'id':'1'
    },
    {
        'nombre': Matadero,
        'texto': 'Matadero',
        'id':'2'
    },
    {
        'nombre': EstacionFantasmaDeChamberi,
        'texto': 'Estacion Fantasma De Chamberi',
        'id':'3'
    }
]

const OtrasVisitasDos = [
    {
        'nombre': PuertaDeAlcala,
        'texto': 'Puerta De Alcala',
        'id':'4'
    },
    {
        'nombre': TeatroReal,
        'texto': 'Teatro Real',
        'id':'5'
    },
    {
        'nombre': CatedralDeLaAlmudena,
        'texto': 'Catedral De La Almudena',
        'id':'6'
    }    
]

const OtrasVisitasTres = [
    {
        'nombre': CuatroTorres,
        'texto': 'Cuatro Torres',
        'id':'7'
    },
    {
        'nombre': PlazaDeEspaña,
        'texto': 'Plaza De España',
        'id':'8'
    },
    {
        'nombre': PlazaMayor,
        'texto': 'Plaza Mayor',
        'id':'9'
    }
]

export default function ImagenOtrasVisitas() {
    return(
        <>

            <div className="cultura-otras_visitas__container">    
            {
                OtrasVisitasUno.map(function (props) {
                    return(                    
                        <div className={'cultura-otras_visitas--imagenes cultura-otras_visitas--imagenes--' + props.id} key={props.id}>
                            <div className={'cultura-otras_visitas--imagenes--imagen--' + props.id}></div>
                            <figcaption className='cultura-otras_visitas--imagenes--text'>{props.texto}</figcaption>
                        </div>        
                    )
                })
            }
            </div>
            <div className="cultura-otras_visitas__container">    
            {
                OtrasVisitasDos.map(function (props) {
                    return(                    
                        <div className={'cultura-otras_visitas--imagenes cultura-otras_visitas--imagenes--' + props.id} key={props.id}>
                            <div className={'cultura-otras_visitas--imagenes--imagen--' + props.id}></div>
                            <figcaption className='cultura-otras_visitas--imagenes--text'>{props.texto}</figcaption>
                        </div>                    
                    )
                })
            }
            </div>
            
            <div className="cultura-otras_visitas__container">    
            {
                OtrasVisitasTres.map(function (props) {
                    return(
                    
                        <div className={'cultura-otras_visitas--imagenes cultura-otras_visitas--imagenes--' + props.id} key={props.id}>
                            <div className={'cultura-otras_visitas--imagenes--imagen--' + props.id}></div>
                            <figcaption className='cultura-otras_visitas--imagenes--text'>{props.texto}</figcaption>
                        </div>                    
                    )
                })
            }
            </div>
        </>
    )    
}