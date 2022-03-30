
import { withLoading } from '../../Loading/withLoading';
import './Restaurantes.scss';
import RestaurantTextbox from './RestaurantTextbox/RestaurantTextbox';

function Restaurantes({ title, restaurantes }) {
    const restaur = restaurantes.restaurantes

    return (
        <div className="restaurantes">
            <div className="restaurantes__titulo">
                <span className="restaurantes__titulo--heading">{title}</span>
            </div>

            {restaur.map((restaurant, index) => {
                if(index%2 === 0) {
                    return <RestaurantTextbox key={restaurant.name} restaurant={restaurant} imgOnRight={true}/>
                } else {
                    return <RestaurantTextbox key={restaurant.name} restaurant={restaurant} imgOnRight={false}/>
                }
            })}
        </div>
    )
}

export default withLoading(Restaurantes)