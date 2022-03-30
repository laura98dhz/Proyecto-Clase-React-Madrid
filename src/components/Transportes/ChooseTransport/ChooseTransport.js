import "./ChooseTransport.scss";
import All from "./All/All";
import { useState } from "react";

export default function ChooseTransport({ doneTransportes, pageEndPointTransportes }) {
  const [show, setShow] = useState(false);

  return (
    <section className="choose__transport" id="choose__transport">
      <h1>¡Elige tu transporte e infórmate!</h1>
      <div className="choose__transport_options">
        <All doneTransportes={doneTransportes} pageEndPointTransportes={pageEndPointTransportes}  show={show} setShow={setShow} />
      </div>
    </section>
  );
}
