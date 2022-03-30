import Button from '../../../Button/Button.js';
import './Popup.scss';

export default function HiddenBox(props) {
    const dish = props.dish;

        return (
            <div className="popup__background" id={dish.name}>
                <div className="popup__box">
                    <div className="popup__box--left">
                    <img className="popup__box--img" src={dish.img} alt={dish.name} />
                    </div>
                    <div className="popup__box--right">
                        <h1 className="popup__box--heading">{dish.name}</h1>
                        <p className="popup__box--descr">{dish.descr}</p>
                        <div className="closeButton">
                            <Button className="closeButton" title="Cerrar" hoverClass="darkRed" onClick={() => props.setButtonPopup(false)} />
                        </div>
                        {/* <button className="closeButton" onClick={function() {
                            props.setButtonPopup(false)
                        }}>Cerrar</button> */}
                    </div>
                </div>
            </div>
        )
}