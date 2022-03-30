import FavouritesCrud from "./FavouritesCRUD/FavouritesCrud";
import "./FourthSection.scss";




export default function FourthSection() {
    return (
       
            <section className="fourth__section">
              <h2 className="fourth__section--title">TUS RUTAS FAVORITAS</h2>
              <FavouritesCrud />
            </section>
        
    )
}