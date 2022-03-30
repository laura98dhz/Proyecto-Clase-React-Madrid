import './Popup.scss';

export default function HiddenBox(props) {
    const dish = props.dish;

    // Ver "Popup-elem.js" para la explicación de cómo funciona el popup
    /* Lo ideal sería sacar el botón como componente aparte, pero no sé como haría para el tema de los estados, para pasarle la variable que controla
    si el popup se muestra o no */
    if(props.buttonPopup) {
        return (
            <div className="popup__background" id={dish.name}>
                <div className="popup__box">
                    <div className="popup__box--left">
                    <img className="popup__box--img" src={dish.img} alt={dish.name} />
                    </div>
                    <div className="popup__box--right">
                        <h1 className="popup__box--heading">{dish.name}</h1>
                        <p className="popup__box--descr">{dish.descr}</p>
                        <button className="closeButton" onClick={function() {
                            props.setButtonPopup(false)
                        }}>Cerrar</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}