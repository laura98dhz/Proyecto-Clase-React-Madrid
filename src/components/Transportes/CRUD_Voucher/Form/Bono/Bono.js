import profileDefault from "../../../../Recursos/img/transport-profile.png";
import bono from "../../../../Recursos/img/crea-tu-bono.jpg";

export default function Bono({ name, surname, fileInput }) {
  return (
    <div className="voucher__form-content--img">
      <img src={bono} alt=" " />
      <p className="voucher__form-content--img-p1">{name}</p>
      <p className="voucher__form-content--img-p2">{surname}</p>
      <div className="voucher__form-content--img-holder">
        <img
          src={fileInput || profileDefault}
          alt=" "
          id="img"
          className="img"
        />
      </div>
    </div>
  );
}
