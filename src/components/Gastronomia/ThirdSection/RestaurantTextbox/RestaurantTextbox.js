import Button from '../../../Button/Button';
import './RestaurantTextbox.scss';

export default function RestaurantTextbox({restaurant, imgOnRight}) {

    if (imgOnRight) {
        return (
            <div className="resTextbox">
                <div className="resTextbox__text">
                    <span className="resTextbox__text--title">
                        {restaurant.name}
                    </span>
                    <div className="resTextbox__text--descr">
                        {restaurant.descr}
                    </div>
                    <div className="closeButton" >
                        <Button url={restaurant.url} title="Visitar" hoverClass="darkRed"/>
                    </div>
                </div>
                <div className="resTextbox__img">
                    <img src={restaurant.img} alt={restaurant.name}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="resTextbox">
                <div className="resTextbox__img">
                    <img src={restaurant.img} alt={restaurant.name}/>
                </div>
                <div className="resTextbox__text">
                    <span className="resTextbox__text--title">
                        {restaurant.name}
                    </span>
                    <div className="resTextbox__text--descr">
                        {restaurant.descr}
                    </div>
                    <div className="closeButton">
                        <Button url={restaurant.url} title="Visitar" hoverClass="darkRed"/>
                    </div>
                </div>
            </div>
        )
    }
    
}