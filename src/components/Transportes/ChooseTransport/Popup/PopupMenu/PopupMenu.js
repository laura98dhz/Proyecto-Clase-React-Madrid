import metro from "../../../../Recursos/img/metro_xl.gif";
import emt from "../../../../Recursos/img/emt_xl.gif";
import inter from "../../../../Recursos/img/interurbanos_cm_xl.gif";
import ligero from "../../../../Recursos/img/metroligero_xl.gif";
import cercanias from "../../../../Recursos/img/cercanias_xl.gif";

const options = {
  metro: metro,
  emt: emt,
  inter: inter,
  ligero: ligero,
  cercanias: cercanias,
};

export default function PopupMenu({ setTypes, type }) {
  return (
    <div
      onClick={() => {
        setTypes(type);
      }}
    >
      <img src={options[type]} alt="" />
    </div>
  );
}
