import ParqueCampoDelMoro from '../Recursos/img/ParqueCampoDelMoro.jfif';
import ParqueDelCapricho from '../Recursos/img/ParqueDelCapricho.jfif';
import ParqueDelOeste from '../Recursos/img/ParqueDelOeste.jpg';
import ParqueDelRetiro from '../Recursos/img/ParqueDelRetiro.jfif';
import ParqueEuropa from '../Recursos/img/ParqueEuropa.jpg';
import ParqueJuanCarlosI from '../Recursos/img/ParqueJuanCarlosI.jpg';
import ParqueMadridRio from '../Recursos/img/ParqueMadridRio.jpg';
import TemploDebod from '../Recursos/img/TemploDebod.jpg';

import PalacioReal from '../Recursos/img/PalacioReal.jpg';
import Matadero from '../Recursos/img/matadero.jpg';
import EstacionFantasmaDeChamberi from '../Recursos/img/EstacionFantasmaChamberi.jpg';
import PuertaDeAlcala from '../Recursos/img/PuertaAlcala.jpg';
import TeatroReal from '../Recursos/img/TeatroReal.jpg';
import CatedralDeLaAlmudena from '../Recursos/img/CatedralAlmudena.jpg';
import CuatroTorres from '../Recursos/img/CuatroTorres.jpg';
import PlazaDeEspaña from '../Recursos/img/PlazaEspaña.jpg';
import PlazaMayor from '../Recursos/img/PlazaMayor.jpg';

import Persona1 from "../Recursos/img/persona1-modified.png";
import Persona2 from "../Recursos/img/persona2-modified.png";
import Persona3 from "../Recursos/img/persona3-modified.png";
import Persona4 from "../Recursos/img/persona4-modified.png";
import Persona5 from "../Recursos/img/persona5-modified.png";
import Persona6 from "../Recursos/img/persona6-modified.png";
import Persona7 from "../Recursos/img/persona7-modified.png";
import Persona8 from "../Recursos/img/persona8-modified.png";
import Persona9 from "../Recursos/img/persona9-modified.png";
import Persona10 from "../Recursos/img/persona10-modified.png";

import Segovia from "../Recursos/img/segovia.jpg";
import Toledo from "../Recursos/img/toledo.jpg";
import Autobus from "../Recursos/img/autobusMadrid.jpg";
import Escorial from "../Recursos/img/escorial.jpg";

import MadridAustrias from "../Recursos/img/MisteriosMadridAustrias.jpg";
import CasasEncantadas from "../Recursos/img/CasasEncantadas.jpg";
import MadridGaldos from "../Recursos/img/MadridGaldos.jpg";
import MadridSefardi from "../Recursos/img/madridSefardi.jpg"


const infoTarjetas = [
  {
    titulo:'Museo Del Prado',
      dirección:'Paseo Prado S/n.',
      metro:'Banco de España (Línea 2)',
      entradaGeneral:'15€',
      horario:'De lunes a sábado de 10.00 a 20.00h Domingos y festivos de 10.00 a 19.00h',
      id:'1'
    },
    {
      titulo:'Museo Reina Sofia',
      dirección:'Paseo Prado S/n.',
      metro:'Banco de España (Línea 2)',
      entradaGeneral:'15€',
      horario:'De lunes a sábado de 10.00 a 20.00h Domingos y festivos de 10.00 a 19.00h',
      id:'2'
    },
    {
      titulo:'Museo Thyssen',
      dirección:'Palacio de Villahermosa, Paseo del Prado 8.',
      metro:'Banco de España (Línea 2)',
      entradaGeneral:'12€',
      horario:'Lunes de 12.00 a 16.00, y de martes a domingos de 10.00 a 19.00 horas.',
      id:'3'
    },
    {
      titulo:'Museo Nacional de Ciencias Naturales',
      dirección:'José Gutiérrez Abascal, 2.',
      metro:'Gregorio Marañón, Nuevos Ministerios, Ríos Rosas',
      entradaGeneral:'7€',
      horario:'De martes a viernes de 10 a 17 horas Sábados, domingos y festivos de 10 a 20 horas',
      id:'4'
    }
];

const ParquesColumnaUno = [
    {
        'nombre': ParqueDelRetiro,
        'url': 'https://es.wikipedia.org/wiki/Parque_del_Retiro_de_Madrid',
        'texto': 'Parque Del Retiro',
        'id':'p1'
    },
    {
        'nombre': ParqueMadridRio,
        'url': 'https://es.wikipedia.org/wiki/Madrid_R%C3%ADo',
        'texto': 'Parque Madrid Rio',
        'id':'p2'
    },
    {
        'nombre': ParqueDelOeste,
        'url': 'https://es.wikipedia.org/wiki/Parque_del_Oeste_(Madrid)',
        'texto': 'Parque Del Oeste',
        'id':'p3'
    },
    {
        'nombre': ParqueEuropa,
        'url': 'https://es.wikipedia.org/wiki/Parque_Europa_(Torrej%C3%B3n_de_Ardoz)',
        'texto': 'Parque Europa',
        'id':'p4'
    },
    {
        'nombre': ParqueDelCapricho,
        'url': 'https://es.wikipedia.org/wiki/Parque_de_El_Capricho',
        'texto': 'Parque Del Capricho',
        'id':'p5'
    },
    {
        'nombre': TemploDebod,
        'url': 'https://es.wikipedia.org/wiki/Templo_de_Debod',
        'texto': 'Templo Debod',
        'id':'p6'
    },
    {
        'nombre': ParqueJuanCarlosI,
        'url': 'https://es.wikipedia.org/wiki/Parque_Juan_Carlos_I',
        'texto': 'Parque Juan Carlos I',
        'id':'p7'
    },
    {
        'nombre': ParqueCampoDelMoro,
        'url': 'https://es.wikipedia.org/wiki/Campo_del_Moro',
        'texto': 'Parque Campo Del Moro',
        'id':'p8'
    }
]

const OtrasVisitas = [
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
    },
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
    },
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


const initialFotos = [
    {
        'nombre': Persona1,
        'texto': 'Marisa Sanchez',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p1',
    },
    {
        'nombre': Persona2,
        'texto': 'Candela López',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p2'
    },
    {
        'nombre': Persona3,
        'texto': 'Jose Luis García',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p3'
    },
    {
        'nombre': Persona4,
        'texto': 'Paco Gonzalez',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p4'
    },
    {
        'nombre': Persona5,
        'texto': 'Luis Zurdo',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p5'
    },
    {
        'nombre': Persona6,
        'texto': 'Rosario Fenol',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p6'
    },
    {
        'nombre': Persona7,
        'texto': 'Paula Cabreras',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p7'
    },
    {
        'nombre': Persona8,
        'texto': 'Alba Tallón',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p8'
    },
    {
        'nombre': Persona9,
        'texto': 'Guillermo Colorado',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p9'
    },
    {
        'nombre': Persona10,
        'texto': 'Angel Ruiz',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p10'
    }
];  

const popUp = [
    {
        "nombre": Segovia,
        "titulo": "Misterios y leyendas del Madrid de los Austrias",
        "precioOferta": 45,
        "precioAnterior": 59,
        "boton": "segovia",
        "id": 1
    },
    {
        "nombre": Toledo,
        "titulo": "Fantasmas y casas encantadas de Madrid",
        "precioOferta": 42,
        "precioAnterior": 59,
        "boton": "toledo",
        "id": 2
    },
    {
        "nombre": Autobus,
        "titulo": "El Madrid de Benito Pérez Galdós",
        "precioOferta": 23,
        "precioAnterior": 35,
        "boton": "autobus",
        "id": 3
    },
    {
        "nombre": Escorial,
        "titulo": "Excursion Al Escorial",
        "precioOferta": 27,
        "precioAnterior": 40,
        "boton": "escorial",
        "id": 4
    }
]

const popUpDos = [
    {
        "nombre": MadridAustrias,
        "titulo": "Misterios y leyendas del Madrid de los Austrias",
        "id": 1
    },
    {
        "nombre": CasasEncantadas,
        "titulo": "Fantasmas y casas encantadas de Madrid",
        "id": 2
    },
    {
        "nombre": MadridGaldos,
        "titulo": "El Madrid de Benito Pérez Galdós",
        "id": 3
    },
    {
        "nombre": MadridSefardi,
        "titulo": "El Madrid Sefardí",
        "id": 4
    }
]

const getAsyncInfoTarjetas = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: {tarjetas: infoTarjetas} });
        // reject(new Error("error"))
      }, 500)
})

const getAsyncParquesColumna = () => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({ data: {parques: ParquesColumnaUno} });
      // reject(new Error("error"))
    }, 500)
})

const getAsyncOtrasVisitas = () => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({ data: {otrasVisitas: OtrasVisitas} });
      // reject(new Error("error"))
    }, 500)
})

const getAsyncInitialFotos = () => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve({ data: {carrusel: initialFotos} });
      // reject(new Error("error"))
    }, 500)
})

const getAsyncPopUp = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: {popUp: popUp} });
        // reject(new Error("error"))
      }, 5000)
})

const getAsyncPopUpDos = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: {popUp: popUpDos} });
        // reject(new Error("error"))
      }, 5000)
})


export {getAsyncInfoTarjetas, getAsyncParquesColumna, getAsyncOtrasVisitas, getAsyncInitialFotos, getAsyncPopUp, getAsyncPopUpDos};