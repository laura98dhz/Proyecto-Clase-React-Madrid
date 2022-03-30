import FirstVoucher from "./FirstVoucher/FirstVoucher";
import SecondVoucher from "./SecondVoucher/SecondVoucher";
import ThirdVoucher from "./ThirdVoucher/ThirdVoucher";
import "./SectionTransportVoucher.scss";

export default function SectionTransportVoucher() {
  return (
    <section className="section__transportVoucher">
      <h1 className="section__transportVoucher--h1">Así se desplazan económicamente los madrileños</h1>
      <hr />
      <div className="section__transportVoucher_content">
        <FirstVoucher />
        <SecondVoucher />
        <ThirdVoucher />
      </div>
      <a href="#voucher"><h1 className="section__transportVoucher--h1-subtitle"><i className="material-icons arrow">arrow_forward</i>¡Para hacerte con las tuyas pulsa aquí!<i className="material-icons arrow">arrow_back</i></h1></a>
    </section>
  )
}
