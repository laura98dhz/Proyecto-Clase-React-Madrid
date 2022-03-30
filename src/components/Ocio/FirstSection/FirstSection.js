import "./FirstSection.scss";
import Rombos from "./Rombos/Rombos";
import Texto from "./Texto/Texto";

export default function FirstSection() {
  return (
    <>
      <section className="first__section" id="first__section">
          <Texto />
          <Rombos />
        <br />
      </section>
    </>
  );
}
