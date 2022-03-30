import BlueFront from "../../../Recursos/img/tarjeta_azul_delante.jpg";
import BlueVoucher from "../../../Recursos/img/tarjeta_azul_maria_detras.jpg";

export default function SecondVoucher() {
  return (
    <div className="section__transportVoucher_content--item">
      <h2 style={{textAlign: "center"}}>Tarjeta Azul</h2><br />
      <div className="card--transporte card--transporte-medias">
        <div className="card--transporte__side card--transporte__side--front">
          <img src={BlueFront} alt="" />
        </div>
        <div className="card--transporte__side card--transporte__side--back card--transporte__side card--transporte__side--back-1">
          <img src={BlueVoucher} alt="" />
        </div>
      </div>
    </div>
  );
}
