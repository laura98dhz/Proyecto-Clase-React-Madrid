import loading from "../../../Recursos/img/loading.gif";
import "./Popup.scss";
import PopupMenu from "./PopupMenu/PopupMenu";

export default function Popup({
  popupInfo,
  doneTransportes,
  setTypes,
  types,
  show,
  setShow,
}) {
  if (doneTransportes) {
    var info = popupInfo[types];
  }

  return (
    <div className={show ? "popup_transportes" : "hidden"}>
      <div
        className="popup_transportes--btn"
        onClick={() => {
          setShow(false);
          window.onscroll = function () {};
        }}
      >
        <i className="material-icons">close</i>
      </div>
      <div className="popup_transportes--options">
        <PopupMenu setTypes={setTypes} type={"metro"} />
        <PopupMenu setTypes={setTypes} type={"emt"} />
        <PopupMenu setTypes={setTypes} type={"inter"} />
        <PopupMenu setTypes={setTypes} type={"ligero"} />
        <PopupMenu setTypes={setTypes} type={"cercanias"} />
      </div>

      {info ? (
        <>
          <div className="popup_transportes-aside">
            <h1 className="popup_transportes-aside--h1">{info.name}</h1>
            <aside className="popup_transportes-aside--text">
              {info.text.split("\n").map((text) => (
                <div key={text.slice(0,5)}>
                <p className="popup_transportes-aside--text-p">
                  {text}
                </p>
                <br />
                </div>
              ))}
            </aside>
          </div>
        </>
      ) : (
        <div className="popup_transportes--loading">
          <img src={loading} alt="Loading..." />
        </div>
      )}
    </div>
  );
}
