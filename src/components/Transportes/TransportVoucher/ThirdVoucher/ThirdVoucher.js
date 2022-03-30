import BonoDelante from "../../../Recursos/img/bono_maria_delante.jpg";
import Multi from "../../../Recursos/img/tarjeta_multi.jpg";

export default function ThirdVoucher() {
  return (
    <div className="section__transportVoucher_content--item">
      <h2 style={{textAlign: "center"}}>Tarjeta de viajes</h2><br />
      <div className="card--transporte card--transporte-medias">
        <div className="card--transporte__side card--transporte__side--front">
          <img src={BonoDelante} alt="" />
        </div>
        <div className="card--transporte__side card--transporte__side--back card--transporte__side card--transporte__side--back-1">
          <img src={Multi} alt="" />
        </div>
      </div>
    </div>
  );
}
