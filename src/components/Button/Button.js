import { useState } from 'react';
import './Button.scss';
/*
Props que hay que pasarle al botón (tienen que pasarse con estos nombres).
Las propiedades son opcionales: cuando incluyas este componente, al llamarlo, puedes pasarle estas propiedades o no
Por ejemplo, si no le pasas una url, el botón no redirigirá a ningún lado. Si no le pasas clase de hover, los estilos no cambiarán, etc.
    url: el enlace que se va a abrir
    title: el texto que saldrá en el botón
    hoverClass: los estilos que se añadirán al hacer hover sobre el botón (ver Button.scss)
    onClick: Función que se ejecutará al hacer click en el botón (si no se pasa esta prop al incluir el botón, simplemente no hará)
    */
export default function Button(props) {
    /*
    Al poner el ratón sobre el botón (el evento onMouseEnter) y quitarlo (onMouseLeave), se llama a toggleHover.
    Esa función cambia el estado de la variable "hovered" (verdadero --> falso y viceversa).
    Cuando "hovered" sea verdadero, aplica la clase pasada como propiedad en "hoverClass" y cuando sea falso, la quita.
    */
    const [hovered, setHovered] = useState(false);

    function toggleHover() {
        setHovered(!hovered);
    }
    
    const cssClass = "buttonG " + (hovered ? props.hoverClass : "" );

    return (
        <a href={props.url} className={cssClass} onClick={props.onClick} onMouseEnter={toggleHover} onMouseLeave={toggleHover} target="_blank" rel="noreferrer">
            {props.title}
        </a>
    )
}