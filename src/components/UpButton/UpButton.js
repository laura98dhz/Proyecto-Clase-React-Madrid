import flecha from "../Recursos/img/flecha-hacia-arriba.png";
import { useLocation } from "react-router-dom";
import {useState} from 'react';
import "./UpButton.scss";

export default function UpButton() {
  const location = useLocation();
  const path = location.pathname;
  const [visible, setVisible] = useState(false);

  const visibilidadBoton = () => {
    const scrolled = document.documentElement.scrollTop;   //La propiedad scrollTop establece o devuelve el número de píxeles que el contenido de un elemento se desplaza verticalmente.
    if (scrolled > 600){
      setVisible(true)
    } 
    else if (scrolled <= 600){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', visibilidadBoton);


  var currentClass = "";

  switch (path) {
    case "/transportes":
      currentClass = "btn__subir btn__subir--transportes";
      break;
    case "/ocio":
      currentClass = "btn__subir btn__subir--ocio";
      break;
    case "/gastronomia":
      currentClass = "btn__subir btn__subir--gastronomia";
      break;
    case "/cultura":
      currentClass = "btn__subir btn__subir--cultura";
      break;
    case "/visita":
      currentClass = "btn__subir btn__subir--visita";
      break;
    default:
      currentClass = "btn__subir btn__subir--index";
      break;
  }

  return (
    <>
      <div
        className= { currentClass }
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        style={{display: visible ? 'inline' : 'none'}}
      >
        <img src={flecha} alt=""></img>
      </div>
    </>
  );
}
