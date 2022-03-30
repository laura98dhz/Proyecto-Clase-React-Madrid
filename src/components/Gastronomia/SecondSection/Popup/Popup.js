import "./Popup.scss";
import PopupElem from './Popup-elem';

export default function Popup(props) {
    const dishes = props.dishes;
    return (
        <>
            <div className="popup">
                {dishes.map(function(dish) {
                    return (
                        <div className="popup__elem" key={dish.name}>
                            <PopupElem dish={dish}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}