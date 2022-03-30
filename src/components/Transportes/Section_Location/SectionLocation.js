import ListTransport from "./ListTransport/ListTransport";
import Map from "./Map/Map";
import "./SectionLocation.scss";
import "../../../sass/base/animations.scss";
import LinkTransport from "./LinkTransport/LinkTransport";

export default function SectionLocation({ doneTransportes, pageEndPointTransportes }) {
  return (
    <>
      <section className="section__location">
        <h1 className="section__location--title">Conoce como desplazarte</h1>
        <hr className="section__location--hr" width="400" />
        <div className="section__location--flex">
          <Map />
          <LinkTransport loading={!doneTransportes} pageEndPointTransportes={pageEndPointTransportes} />
          <ListTransport />
        </div>
      </section>
    </>
  );
}
