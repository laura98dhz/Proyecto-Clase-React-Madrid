import HiddenBox from './Popup-elemHidden';
import { useState } from 'react';
import './Popup.scss';

/* Cómo funciona el popup: 
    *1: Se crea la variable de estado "buttonPopup" y la función para cambiarle el valor a dicha variable, "setButtonPopup". Con useState(), se le
        asigna el valor False a buttonPopup.
    *2: Se añade una función onClick al nombre del elemento, que llama a setButtonPopup, el cual actualiza la variable buttonPopup con su 
        nuevo valor (True)
    *3: Al componente HiddenBox (que es el popup en sí, lo que contiene toda la información a mostrar al hacer click) se le pasa dos propiedades:
        "trigger", que almacena el valor actual de buttonPopup, y "setTrigger", que es simplemente la función setButtonPopup, para cambiar el estado.
    
    En el componente HiddenBox (desarrollado en Popup-elemHidden.js), se evalúa el valor de esta variable de estado. Si la variable es True, el componente
    devuelve la información (o sea, se muestra el popup). Si la variable es False, no devuelve nada.
    El popup contiene un botón para cerrarlo, que hace lo mismo, pero al contrario: tiene un onClick que llama a setButtonPopup con el valor False, lo
    cual cambia el estado de la variable buttonPopup, y esconde el popup.
*/
export default function PopupElem(props) {
    const dish = props.dish;
    const [buttonPopup, setButtonPopup] = useState(false); // *1
    return (
        <>
        <img className="popup__img--thumbnail" src={dish.img} alt={dish.name} />
        <span className="popup__img--name" onClick={function() { // *2
            setButtonPopup(true)
        }}>{dish.name}</span>

        <HiddenBox dish={dish} buttonPopup={buttonPopup} setButtonPopup={setButtonPopup}/> {/* *3 */}
        </>
    )
}