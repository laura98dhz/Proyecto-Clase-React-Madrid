import Variety from "./Variety/Variety";
import "./ThirdSection.scss";

export default function ThirdSection() {
  return (
    <section className="third__section">
      <h1 className="third__section--title">
        LAS DIFERENTES OPCIONES DE OCIO
      </h1>
      <Variety />
    </section>
  );
}
