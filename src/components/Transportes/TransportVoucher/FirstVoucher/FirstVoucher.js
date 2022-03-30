import BonoDelante from "../../../Recursos/img/bono_maria_delante.jpg";
import BonoDetras from "../../../Recursos/img/bono_maria_detras.jpg";

export default function FirstVoucher() {
  return (
    <div className="section__transportVoucher_content--item">
      <h2 style={{textAlign: "center"}}>Abono mensual</h2><br />
      <div className="card--transporte card--transporte-medias">
        <div className="card--transporte__side card--transporte__side--front">
          <img src={BonoDelante} alt="" />
        </div>
        <div className="card--transporte__side card--transporte__side--back card--transporte__side card--transporte__side--back-1">
          <img src={BonoDetras} alt="" />
        </div>
      </div>
    </div>
  );
}